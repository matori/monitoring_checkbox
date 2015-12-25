jQuery(function ($) {

    var checkedClass = "is-select";
    var $checkboxFields = $(".group-list");

    $checkboxFields.each(function (idx, val) {
        var $this = $(this);
        var $checkboxAll = $this.find("[type='checkbox']");
        var $toggleAll = $checkboxAll.eq(0);
        var $checkboxes = $checkboxAll.slice(1);
        var checkedCount = 0;
        var checkboxLen = $checkboxes.length;
        var checkedAll = false;

        // ロード時にチェックを外したい？
        $checkboxAll.prop("checked", false);

        $checkboxes.on("change", function (evt) {
            var $this = $(this);

            if ($this.prop("checked")) {
                $this.parent("label").addClass(checkedClass);
                checkedCount++;
            } else {
                $this.parent("label").removeClass(checkedClass);
                checkedCount--;
            }

            if (checkedCount === checkboxLen) {
                $toggleAll.prop("checked", true);
                checkedAll = true;
            } else if (checkedAll && checkedCount < checkboxLen) {
                $toggleAll.prop("checked", false);
                checkedAll = false;
            } else {
                console.log("何かおかしいっぽいです");
            }
        });

        $toggleAll.on("change", function (evt) {
            var isChecked = $toggleAll.prop("checked");

            $checkboxes.each(function (idx, val) {
                $this = $(this);
                $this.prop("checked", isChecked);

                if (isChecked) {
                    $this.parent("label").addClass(checkedClass);
                } else {
                    $this.parent("label").removeClass(checkedClass);
                }

                checkedAll = isChecked;
                checkedCount = isChecked ? checkboxLen : 0;
            });
        });
    });
});
