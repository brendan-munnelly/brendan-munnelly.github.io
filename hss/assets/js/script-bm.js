(function () {
  const annotate = RoughNotation.annotate;
  const annotationGroup = RoughNotation.annotationGroup;
  const $ = (t) => document.querySelector(t);

  // export interface RoughAnnotationConfig {
  //   type: RoughAnnotationType;
  //   animate?: boolean; // defaults to true
  //   animationDuration?: number; // defaulst to 1000ms
  //   animationDelay?: number; // default = 0
  //   color?: string; // defaults to currentColor
  //   strokeWidth?: number; // default based on type
  //   padding?: number; // defaults to 5px
  // }

  {
    // top
    const a1 = annotate($('header span.abox'), { type: 'underline', strokeWidth: 3, padding: 3, color: '#B71C1C' });
    // const ag = annotationGroup([a1]);
    // ag.show();
    a1.show();
  }













})();