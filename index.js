const {NlpManager}= require('node-nlp');

const manager = new NlpManager(({languages: ['en']}))

//add document
manager.addDocument('en','hello','greeting')
manager.addDocument('en','hi','greeting')
manager.addDocument('en','hey you','greeting')
manager.addDocument('en','yo','greeting')
manager.addDocument('en','good morning','greeting')
manager.addDocument('en','hello','greeting')


manager.addAnswer('en','greeting','hey you')
manager.addAnswer('en','greeting','hey there')
manager.addAnswer('en','greeting','yo whatsapp')
manager.addAnswer('en','greeting','hii')
manager.addAnswer('en','greeting','hey')

manager.train().then(async()=>{
    manager.save();
    let response = await manager.process('en','hii how are you');
    console.log(response);

    

    });

