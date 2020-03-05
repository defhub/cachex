import * as actionsCore from "@actions/core";
import * as actionsGithub from "@actions/github";

try {
  const providerName = actionsCore.getInput("provider");

  console.log(`Using provider ${providerName}!`);

  actionsCore.setOutput("result", providerName);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(actionsGithub.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  actionsCore.setFailed(error.message);
}
