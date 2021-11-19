class constants
{
    baseurl = 'https://miro.com/signup/'
    newuser = 'user'+ Math.random().toString(36).substr(2, 5)
    newemail = Math.random().toString(36).substr(2, 5)+'@xyz.com'
    newpwd = 'pwd'+ Math.random().toString(36).substr(2, 5)

    invalidemailid= "xyz.com"
    existinguser="testuser1"
    existingemailid="email@xyz.com"
    existingpassword="testuser13"

    Succesfulsignupmessage="Check your email"
    invalidemailmessage1="The email you entered is incorrect."
    invalidemailmessage2="Sorry, this email is already registered"



}

module.exports = new constants();


