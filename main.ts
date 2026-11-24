// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
//
// Writes exactly one funny line, a single sentence of at most 200
// characters, to /output/entry.txt. The output is a fixed string: the
// program is deterministic (two runs produce byte-identical output),
// makes no network calls, reads no clock or randomness, and needs no
// environment secrets.
//
// NOTE: never change the output file's permissions here. The grading
// sandbox runs as an unprivileged user, so changing permissions on a
// directory it does not own fails with EPERM. Setting the umask up
// front is enough: files created afterwards get mode 0644 and
// directories 0755.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

process.umask(0o022);

const LINE =
  "My password manager autofilled my banking password into a pizza order, and for one terrifying second I was a large pepperoni away from financial ruin.";

// Gate the line against the competition's own rules before writing it:
// UTF-8 text, 1 to 200 characters, not only whitespace, one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line is ${chars} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !LINE.endsWith(".")) {
  throw new Error("line must be exactly one sentence");
}
// It is one line: no line breaks anywhere inside it.
if (/[\r\n]/.test(LINE)) {
  throw new Error("line must not contain a line break");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written: the file must hold exactly the line,
// byte for byte, so a partial write can never pass silently.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("written file does not match the line");
}
