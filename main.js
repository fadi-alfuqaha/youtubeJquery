$(function () {

    const thumbnail = (src) => {
        const $div = $("<div>", { "class": "thumbnail" });
        const $img = $("<img>", { "src": src });
        $div.append($img);
        return $div;
    }

    const info = (textHead, textp) => {
        const $div = $("<div>", { "class": "info" });
        const head = $("<h3>");
        head.append(textHead);
        $div.append(head);
        const paragraph = $("<p>");
        paragraph.append(textp);
        $div.append(paragraph);
        return $div;

    }

    const videoItem = (obj) => {
        const rightSide = $(".rightSide");
        const $div = $("<div>", { id: obj.id, "class": "selectedVedio", "title": obj.title });
        $div.on('click', function () {
            const videoShow = $("iframe");
            videoShow.attr("src", `https://www.youtube.com/embed/${this.id}`);
            titleDiv = $(".rightSide .description");
            titleDiv.html(this.title);
            channelDiv = $(".title div h4");
            channelDiv.html(this.title);
            showHide(this.id)
        })
        $div.append((thumbnail(obj.thumbnail)));
        $div.append(info(obj.title, obj.title));
        rightSide.append($div);
    }

    videoShow = $("iframe");
    videoShow.attr("src", `https://www.youtube.com/embed/${videos[6].id}`);
    videos.forEach(element => {
        videoItem(element);
    });

    const showHide = (id) => {
        console.log(id)
        const items = $(".selectedVedio")
        items.each((index, value) => {
            console.log(value.id)
            console.log(value.id === id)
            console.log( $(this))
            if (value.id === id) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        })
    }
  

});