const ageOfYear = require('../../utils/ageOfYear');
let getCurAge, timer;

Page({
    data: {
        age: 'touch me',
        birthday: '',
    },

    onLoad: function() {
        wx.getStorage({
            key: 'birthday',
            success: ({data}) => {
                this.update(data);
            }
        });
    },

    update: function(birthday) {
        getCurAge = ageOfYear(birthday);

        this.setData({
            birthday,
            age: getCurAge().toFixed(7)
        });

        timer = setInterval(() => {
            this.setData({
                age: getCurAge().toFixed(7)
            });
        }, 3155.76);
    },

    bindDateChange: function(e) {
        const birthday = e.detail.value;

        wx.setStorage({key: 'birthday', data: birthday});
        this.update(birthday);
    },
});
