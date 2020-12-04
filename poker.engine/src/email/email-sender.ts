import sg = require('@sendgrid/mail')
let sendgridOptions:any = {};
sendgridOptions.auth    = {};
sendgridOptions.auth.api_key = process.env.POKER_SENDGRID_API_KEY;         

export function sendEmail(to:string, subject:string, html:string, text?:string, fromEmail?:string, bccs?:string[]) : Promise<string>{
  // Create email
    const msg:any = {        
        bcc:   bccs,
        from:     fromEmail || process.env.POKER_SITE_NAME + ' <' + process.env.POKER_FROM_EMAIL + '>',
        subject:  subject         
      };
      // console.log('/home/dev/ctppoker/poker.engine/src/email/email-sender.ts') //####delete####
      if(to){
        msg.to = to;
        // console.log(to) //####delete####
      }
      if(html){
        msg.html = html;
        // console.log(html) //####delete####
      }
      if(text){
        msg.text = text;
        // console.log(text) //####delete####
      }
      
      return new Promise((resolve,reject)=>{
        sg.send(msg, false, (err)=>{          
          if(err){
            // console.log('reject') //####delete####
            reject('@sendgrid/mail: ' + err)
          }else{
            resolve('')
          }
        }).catch((err:any)=>{
          // console.log('catch reject') //####delete####
          // reject('@sendgrid/mail: ' + err)
          resolve('') //####delete####
        });
      })
}