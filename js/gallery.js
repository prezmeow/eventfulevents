// A $( document ).ready() block.
$(document).ready(function () {
  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailAlign: "center",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    gallerySorting: "titleasc",
    thumbnailOpenImage: true
  });
});
