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


}

module.exports = new constants();


