const electron = require('electron');
const Menubar = require('menubar');

const menubar = Menubar();

menubar.on('ready', ()=>{
  console.log('App is ready');
  
})