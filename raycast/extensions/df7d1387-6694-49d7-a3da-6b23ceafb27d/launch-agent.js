"use strict";var y=Object.create;var o=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var E=(n,t)=>{for(var e in t)o(n,e,{get:t[e],enumerable:!0})},l=(n,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of A(t))!x.call(n,r)&&r!==e&&o(n,r,{get:()=>t[r],enumerable:!(s=h(t,r))||s.enumerable});return n};var P=(n,t,e)=>(e=n!=null?y(S(n)):{},l(t||!n||!n.__esModule?o(e,"default",{value:n,enumerable:!0}):e,n)),F=n=>l(o({},"__esModule",{value:!0}),n);var R={};E(R,{default:()=>d});module.exports=F(R);var i=require("@raycast/api");var p=P(require("node:process"),1),w=require("node:util"),a=require("node:child_process"),b=(0,w.promisify)(a.execFile);async function c(n,{humanReadableOutput:t=!0,signal:e}={}){if(p.default.platform!=="darwin")throw new Error("macOS only");let s=t?[]:["-ss"],r={};e&&(r.signal=e);let{stdout:f}=await b("osascript",["-e",n,s],r);return f.trim()}var u=require("@raycast/api");async function g(){try{return await c(`
      tell application "System Events"
        set agentRunning to (name of processes) contains "Pin"
        return agentRunning
      end tell
    `)==="true"}catch{return!1}}async function m(){try{return await c(`
      try
        tell application "Pin" to activate
        return "success"
      on error
        return "error"
      end try
    `)==="success"}catch{return!1}}async function d(){if(await g()){await(0,i.showHUD)("Agent already running");return}await m()?await(0,i.showHUD)("Agent launched"):await(0,i.showToast)({style:i.Toast.Style.Failure,title:"Failed to Launch Agent",message:"Make sure Pin.app is installed"})}
