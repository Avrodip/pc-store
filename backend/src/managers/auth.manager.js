const db = require("../config/database")
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SecretKey = process.env.JWT_SECRET_KEY;
const expiresIn = process.env.JWT_TIMEOUT_DURATION;
const nodemailer = require('nodemailer');
class AuthManager {

    // User Login
    async userLogin(req) {
        const userData = req.body;
        try {
            let [users] = await db.promise().query('CALL getUserDetails(?)', [userData.emailID]);

            if (users.length > 0) {
                const match = await bcrypt.compare(userData.password, users[0][0].password);
                if (match) {
                    console.log("It is matched")
                    // User exists and password is correct
                    let data = { userID: users[0][0].userID }
                    let jwtPayload = {
                        userID: users[0][0].userID,
                        emailID: userData.emailID,
                    }

                    try {
                        data.token = jwt.sign(jwtPayload, SecretKey, { expiresIn: '2hr' });
                        return { success: true, message: 'Login successful', data: data };
                    } catch (err) {
                        return { success: false, message: 'Some error occurred during token generation.' };
                    }
                } else {
                    // User exists but password is incorrect
                    return { success: false, message: 'Invalid password' };
                }
            } else {
                // User does not exist
                return { success: false, message: 'User does not exist...Please Register.' };
            }
        }
        catch (error) {
            return { success: false, message: 'An error occurred during login' };
        }
    }


    // User Registration
    async userRegistration(req) {
        const userData = req.body;

        try {
            const [existingUser] = await db.promise().query('CALL getUserDetails(?)', [userData.emailID]);

            // User Already Exist
            if (existingUser[0].length > 0) {
                return { success: false, message: 'User already exists' };
            }

            // To hash a password
            let hashedPassword = await new Promise((resolve, reject) => {
                bcrypt.hash(userData.password, 10, function (err, hash) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(hash);
                    }
                });
            });

            const userID = uuidv4();
            // If user not exist
            const values = [userID, userData.firstName, userData.lastName, userData.emailID, userData.contactNumber, hashedPassword];
            db.promise().query("CALL updateUserDetails(?, ?, ?, ?, ?, ?)", values);

            // Prepare the user data to return
            const user = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.emailID,
            };

            return { success: true, message: 'Registration successful', data: user };
        }
        catch (error) {
            console.error("Error during registration: ", error);
            return { success: false, message: 'An error occurred during registration' };
        }
    }


    // Get User By ID
    async getUserDetilsByID(req) {
        const userData = req.body;

        try {
            const [userDetails] = await db.promise().query("CALL getUserDetailsByID(?)", [userData.userID]);

            // User Already Exist
            if (userDetails.length > 0) {
                return { success: true, message: "User Details", data: userDetails[0] };
            }

            return {
                success: false, message: "user doesn't exist with provided userID"
            };
        }
        catch (error) {
            console.error("Error during fetching user Details: ", error);
            return { success: false, message: 'An error occurred during fetching user Details' };
        }
    }

    
    async forgetPassword(req) {
        const { email } = req.body;

        try {
            // Generate OTP
            const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

            // Create transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASS,
                },
            });

            const mailOptions = {
                from: ' process.env.GMAIL_USER', 
                to: email,
                subject: 'Password Reset OTP',
                text: `Your OTP for password reset is: ${otp}`,
            };

            await transporter.sendMail(mailOptions);
            await this.storeOtpInDatabase(email, otp);

            return { success: true, message: 'OTP sent to your email for password reset' };
        } catch (error) {
            console.error('Error sending OTP for password reset:', error);
            return { success: false, message: 'An error occurred while sending OTP for password reset' };
        }
    }

    async storeOtpInDatabase(email, otp) {
        try {
            console.log("email",email,otp)
            const [results] = await db.promise().query('CALL storeotp(?, ?)', [email, otp]);
            console.log(results);
        } catch (error) {
            console.error('Error storing OTP in database:', error);
            throw error; // Handle or propagate the error as needed
        }
    }

    async verifyOtp(req) {
        const email = req.body.email;
        const otp = req.body.otp;
        
        try {
            const [results] = await db.promise().query('CALL verifyotp(?, ?)', [email, otp]);
            
            if (results && results.length > 0 && results[0][0].message === 'OTP verified successfully') {
                return { success: true, message: 'OTP verification successful' };
            } else {
                // OTP verification failed
                return { success: false, message: 'OTP verification failed' };
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            throw error;
        }
    }

    async setNewPassword(req) {
        const email = req.body.email;
        const newPassword = req.body.password;
        let password = await new Promise((resolve, reject) => {
            bcrypt.hash(newPassword, 10, function (err, hash) {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        });
        try {
            const [rows] = await db.promise().query('CALL setNewPassword(?, ?)', [email, password]);
            
            // Extract the message from the response
            const message = rows[0][0].message;
            
            console.log("Message:", message); // Log the message
            
            return { success: true, message: message }; // Return the message in the response
        } catch (error) {
            console.error("Error during updating password: ", error);
            return { success: false, message: 'An error occurred during updating password' };
        }
    }
    
}


module.exports = AuthManager;