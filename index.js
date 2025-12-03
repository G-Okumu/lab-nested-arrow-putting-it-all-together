
let userInfo = {username: '', password: ''};

function createLoginTracker(userInfo){
  let attemptCount = 0;

  return (passwordAttempt) => {
    if(passwordAttempt === userInfo.password){
      return "Login successful";
    }

    if(passwordAttempt !== userInfo.password){
      attemptCount++;

      if(attemptCount <= 3){
        return `Attempt ${attemptCount}: Login failed`;
      }

      if(attemptCount > 3){
        return "Account locked due to too many failed login attempts";
      }
    }
  }

}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


