Package.describe({
    summary: "This package provides a method to create a histgogram out of an array with samples",
    version: "0.0.1",
    git: "https://github.com/flowkey/histogram.git"
});

Package.onUse(function(api) {
    api.addFiles('flowkey:histogram.js');
    api.export('histogram');
});