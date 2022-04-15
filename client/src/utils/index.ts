export function validateEmail(email:string) {
  if(email){
    let treatedEmail = email.trim().toLocaleLowerCase();
    return /^[\w+.-]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(treatedEmail);
  }
};

export function validatePassword(password:string){
  if(password){
    let treatedPassword = password.trim();
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(treatedPassword);
  }
}