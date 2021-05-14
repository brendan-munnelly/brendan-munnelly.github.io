!(function (e) {
    var i = e(".demo-preview-iframe"),
        t = e(".demo-preview-desktop"),
        n = e(".demo-preview-mobile"),
        s = e("#demo-spinner");
    i.on("load", function () {
        e(".demo-preview-content").removeClass("is-loading"), s.remove();
    }),
        t.on("click", function (e) {
            e.preventDefault(),
                i.is(".demo-preview-iframe-mobile") &&
                    (t.addClass("is-active"),
                    n.removeClass("is-active"),
                    i.css({ opacity: 0 }),
                    i.removeClass("demo-preview-iframe-mobile"),
                    setTimeout(function () {
                        i.animate({ opacity: 1 }, 250);
                    }, 250));
        }),
        n.on("click", function (e) {
            e.preventDefault(),
                t.removeClass("is-active"),
                n.addClass("is-active"),
                i.is(".demo-preview-iframe-mobile") ||
                    (i.css({ opacity: 0 }),
                    i.addClass("demo-preview-iframe-mobile"),
                    setTimeout(function () {
                        i.animate({ opacity: 1 }, 250);
                    }, 250));
        });
})(jQuery),
    (function () {
        const e = document,
            i = e.querySelector(".demo-preview-select"),
            t = e.querySelector(".demo-preview-selected"),
            n = e.querySelector(".demo-preview-select-list"),
            s = e.querySelector(".demo-preview-iframe");
        i &&
            (t.addEventListener("click", function () {
                i.classList.toggle("is-open");
            }),
            document.addEventListener("click", function (e) {
                (e.target.closest(".demo-preview-select") && !e.target.classList.contains("demo-preview-select-link")) || (i.classList.contains("is-open") && i.classList.remove("is-open"));
            }),
            window.addEventListener("blur", function () {
                document.activeElement instanceof HTMLIFrameElement && i.classList.contains("is-open") && i.classList.remove("is-open");
            }),
            window.addEventListener("message", function (i) {
                if ("https://preview.cruip.com" !== i.origin) return;
                let o = i.data;
                0 !== o.length &&
                    ((n.innerHTML = ""),
                    o.forEach(function (i) {
                        !0 === i.active && (t.getElementsByTagName("span")[0].innerHTML = i.name);
                        let o = e.createElement("li"),
                            a = e.createElement("a");
                        (a.href = i.url),
                            (a.innerHTML = i.name),
                            a.classList.add("demo-preview-select-link"),
                            !0 === i.active && a.classList.add("demo-preview-select-link-active"),
                            n.appendChild(o),
                            o.appendChild(a),
                            a.addEventListener("click", function (e) {
                                e.preventDefault(), (s.src = this.href);
                            });
                    }));
            }));
    })();
