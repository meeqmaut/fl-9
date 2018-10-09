import modulesDefault from './modulesDefault.js' 

    let arg1 = process.argv[2];
    let arg2 = process.argv[3];

    console.log(modulesDefault.PI);
    console.log(modulesDefault.sqrt(+arg1));
    console.log(modulesDefault.square(+arg2));