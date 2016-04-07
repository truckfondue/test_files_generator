#node_scripts
A myriad of bash and node for straight-forward results in less time.

##Running the script
`shjs testFilesGenerator.js`

##Strategy
Move all files under `test` someplace safe.
Run the script `testFilesGenerator.js`
Copy the original test files (those containing tests) back to the `test` directory overwriting the default import statement produced via the generator script.