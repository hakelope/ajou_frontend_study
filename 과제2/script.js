(function () {
    "use strict";

    // 1. 클릭 이벤트
    var clickBtn = document.getElementById("clickBtn");
    var clickMessage = document.getElementById("clickMessage");
    var clickCount = 0;

    if (clickBtn && clickMessage) {
        clickBtn.addEventListener("click", function () {
            clickCount += 1;
            clickMessage.textContent = "버튼을 " + clickCount + "번 클릭했습니다.";
            window.alert("클릭 이벤트가 발생했습니다!");
            console.log("[클릭]", new Date().toISOString(), "count:", clickCount);
        });
    }

    // 2. 실시간 입력
    var liveInput = document.getElementById("liveInput");
    var liveOutput = document.getElementById("liveOutput");
    var defaultLiveText = "콘솔을 확인하거나 여기에 출력됨";

    if (liveInput && liveOutput) {
        liveInput.addEventListener("input", function () {
            var value = liveInput.value;
            liveOutput.textContent = value.length ? value : defaultLiveText;
            console.log("[input]", value);
        });
    }

    // 3. 폼 제출 + FormData
    var demoForm = document.getElementById("demoForm");
    var formResult = document.getElementById("formResult");

    if (demoForm) {
        demoForm.addEventListener("submit", function (e) {
            e.preventDefault();

            var fd = new FormData(demoForm);
            var name = fd.get("name");
            var email = fd.get("email");

            var payload = {
                name: name,
                email: email,
            };

            console.log("[FormData]", payload);

            if (formResult) {
                formResult.hidden = false;
                formResult.textContent =
                    "FormData 결과:\n" +
                    JSON.stringify(payload, null, 2) +
                    "\n\n(실제 서비스에서는 이 값을 fetch 등으로 서버에 보냅니다.)";
            }
        });
    }
})();
