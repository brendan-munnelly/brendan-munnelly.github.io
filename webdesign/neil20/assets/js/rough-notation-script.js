(function () {
    const annotate = RoughNotation.annotate;
    const annotationGroup = RoughNotation.annotationGroup;
    const $ = (t) => document.querySelector(t);

    {
    const a1 = annotate($('header span.abox'), { type: 'underline', strokeWidth: 3, padding: 3, color: '#888888' });
    a1.show();
  }
})();