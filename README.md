Please perform the following steps to setup the code
1. Clone the repo on your machine.
2. There are three application in mono-workspace. Mono-workspace is created so that single node module is created which would take less space and faster rendering time.
3. Delete the node-module folder and package.lock.json. 
4. Go to each applications mentioned below and perform the commands mentioned in the commands section:

**Applications**
1. host-app
2. mfe-app
3. mfe-app2

**Commands**
1. npm install
2. ng serve


**Cross Cutting Concerns used in the application**
1.	A web worker has been added to calculate the premium based on the age of the employee in pay-premium MFE.
2.	Used webpack for bundling.
3.	Used SCSS pre-processor.
4.	MFE is communicating through localstorage. 


