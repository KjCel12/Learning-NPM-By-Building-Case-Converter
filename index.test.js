assert.strictEqual(
    caseConverter.getLowerCase("hello free Code Camp!"),
    "hello free code camp!",
);

assert.strictEqual(
    caseConverter.getSentenceCase("hello free Code Camp!"),
    "Hello free code camp!",
);

assert.strictEqual(
    caseConverter.getProperCase("hello free Code Camp!"),
    "Hello Free Code Camp!",
);
