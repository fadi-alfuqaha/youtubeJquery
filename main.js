const thumbnail = (src) => {
    const $div = $("<div>", { "class": "thumbnail" });
    const $img = $("<img>", { "src": src });
    $div.append($img);
    return $div;
}

const info = (textHead,textp) => {
    const $div = $("<div>", { "class": "info" });
    const head = $("<h3>");
    head.append(textHead);
    $div.append(head);
    const paragraph = $("<p>");
    paragraph.append(textp);
    $div.append(paragraph);
    return $div;

}

const videoItem = (obj) =>  {
    const rightSide = $(".rightSide");
    const $div = $("<div>", { id: obj.id, "class": "selectedVedio", "title": obj.title });
    $div.append((thumbnail(obj.thumbnail)));
    $div.append(info(obj.title, obj.title));
    rightSide.append($div);
}


videos.forEach(element => {
    videoItem(element);
});