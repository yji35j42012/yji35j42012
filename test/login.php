
<div class="container">
    <div class="row">
        <div class="col-lg-6">

            <div class="card">

                <div class="card-body">
                    <h5 class="card-title">登入</h5>

                    <form name="form1" method="post" onsubmit="checkForm(); return false;">
                        <div class="mb-3">
                            <label for="email" class="form-label">帳號 (email)</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">密碼</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                        </div>

                        <button type="submit" class="btn btn-primary">登入</button>
                    </form>
                </div>
            </div>

        </div>
    </div>


</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
<script>
    function checkForm() {
        // TODO: 欄位檢查
        if (!$('#email').val()) {
            alert('請填寫帳號');
            return;
        }
        if (!$('#password').val()) {
            alert('請填寫密碼');
            return;
        }
        $.post(
            './login_api.php',
            $(document.form1).serialize(),
            function(data) {
                console.log('data',data);
                
                if(data.success){
                    // echo '登入成功';
                    location.href = './login.php';
                    alert('登入成功');
                } else {
                    alert(data.error);
                }
            },
            'json'
        );

    }
</script>