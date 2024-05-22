$(document).ready(function() {
    // ボタンをクリックすると文字色が変わる
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');  // ここで青色に変えるよ
    });

    // ボタンをクリックすると文字内容が変わる
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');  // ここで新しい文字に変えるよ
    });

    // ボタンをクリックするとフェードアウトで文字が消える
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // ボタンをクリックするとフェードインで文字が現れる
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});
