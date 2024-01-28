import core from "@actions/core";
import github from "@actions/github";
import { publishToHashnode } from "./lib/publication.js";

async function run() {
  try {
    const title = core.getInput("title");
    const files = core.getInput("files");
    const hashnode_key = core.getInput("hashnode_key");

    core.setSecret(hashnode_key);

    console.log('welcome to this action')
    core.debug(
      JSON.stringify({
        title,
        files,
        hashnode_key,
      })
    );

    // some function to analyze the post
    // give output of the post
    const results = await publishToHashnode({
      title,
      hashnode_key,
      files,
    });

    const output = results.map((r) => {
      console.log("r:", r);
    });

    const json = JSON.stringify(output, null, 2);
    core.debug("Output result_json:\n" + json);
    core.setOutput("result_json", json);

    const summary = `output length: ${output.length}`;
    core.setOutput("result_summary", summary);

    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // Get the JSON webhook payload for the event that triggered the workflow
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
