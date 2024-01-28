const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const name = core.getInput("name");
  const topic = core.getInput("topic");
  const secret = core.getInput("secret");

  console.log(`Hello ${name}!`);
  const time = new Date().toTimeString();
  
  const message = `New blog published on topic ${topic} received your key ${secret}`;

  core.setOutput("time", time);
  core.setOutput("message", message);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);

  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
