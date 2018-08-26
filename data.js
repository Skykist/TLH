$(document).ready(function(){
    var template = $("#riceList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        rice: [
            {
                name: "Buddha",
                img: "https://s3-media3.fl.yelpcdn.com/bphoto/rTwbonlkPD0CkOnWM0qk8A/o.jpg"
            },
            {
                name: "Three Ladies",
                img: "https://besttimpex.com/wp-content/uploads/2017/02/rice-5_1-1.jpg?gid=14"
            },
            {
                name: "Phoenix",
                img: "https://imgix.ttcdn.co/i/product/original/0/513854-3141c75d184d4bfead3e9f69627ca105.png?q=100&auto=format%2Ccompress&w=500"
            },
            {
                name: "Jazzmen",
                img: "http://www.jazzmenrice.com/images/storeItems/25lb-White-Rice.png"
            },
            {
                name: "Three Rings Sweet Rice",
                img: "data:image/jpeg;base64,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"
            },
            {
                name: "Dragonfly",
                img: "https://images-na.ssl-images-amazon.com/images/I/91xEFHYx-SL._SY606_.jpg"
            },
            {
                name: "Three Ladies Sweet Rice",
                img: "https://s3-media3.fl.yelpcdn.com/bphoto/JRsAuzAtR1o8qe1U9ywkfw/o.jpg"
            },
            {
                name: "Nishiki Brown Rice",
                img: "https://images.japancentre.com/images/pics/6797/original/original.jpg?1469563517"
            }
            
        ],

        show: false
    })
    $("#target").html(rendered);
});

$(document).ready(function(){
    var template = $("#seafoodList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        meat: [
            {
                name: "Lobster",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-americanlobster.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Salmon",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-atlanticsalmon.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Catfish",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-catfish.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Clams",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-clam.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Shrimp",
                img: "https://www.pacificseafood.com/images/default-source/default-album/ss_coldwater_shrimp_pandalus_jordani_4_ko_309x159px.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Crab",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-kingcrab.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Mahi",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-mahi.tmb-.jpg?sfvrsn=1"
            },
            {
                name: "Oysters",
                img: "https://www.pacificseafood.com/images/default-source/commercial-products/prodinfo-oysters.tmb-.jpg?sfvrsn=1"
            }
            
        ],

        show: false
    })
    $("#target").html(rendered);
});

$(document).ready(function(){
    var template = $("#meatList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        meat: [
            {
                name: "Chicken Thigh",
                img: "http://www.newsonwellness.com/wp-content/uploads/2014/09/raw-chicken.jpg"
            },
            {
                name: "Beef Short Rib",
                img: "https://belcampo.com/wp-content/uploads/2018/06/beef-short-rib.e359cb97d147ee024d24689d46228fb4-400x400.jpg"
            },
            {
                name: "Ground Beef",
                img: "https://belcampo.com/wp-content/uploads/2018/06/organic-grass-fed-ground-beef.c07b54523f46a5a73e098aeaf9f1c4ab.jpg"
            },
            {
                name: "NY Strip Steak",
                img: "https://belcampo.com/wp-content/uploads/2018/06/ny-strip-steak-bone-in.94399e42068e51b715b7d92158f88243-400x400.jpeg"
            },
            {
                name: "Rib Eye, Bone-In",
                img: "https://belcampo.com/wp-content/uploads/2018/06/rib-eye-bone-in.711698effb0470fd830dbbc9224da318-400x400.jpeg"
            },
            {
                name: "Smoked Bacon",
                img: "https://belcampo.com/wp-content/uploads/2018/06/smoked-bacon-wl.b5ed68f47dcd2d7de915b19a85c08092-400x400.jpg"
            },
            {
                name: "Flank Steak",
                img: "https://belcampo.com/wp-content/uploads/2018/06/flank-steak.2a999c3bfa268a2d1e88d2fb5ebf8f7a-400x400.jpg"
            },
            {
                name: "Lamp Chops",
                img: "https://belcampo.com/wp-content/uploads/2018/06/lamb-chops.fb30746567e6a5a6e989f50afca6518b-400x400.jpg"
            }
            
        ],

        show: false
    })
    $("#target").html(rendered);
});

$(document).ready(function(){
    var template = $("#itemList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        item: [
            {
                name: "Bananas",
                img: "https://africa-me.com/wp-content/uploads/2015/12/somalia-banana-643x371.jpg"
            },
            {
                name: "Bell Peppers",
                img: "http://www.pictorem.com/collection/900_2384656HighRes.jpg"
            },
            {
                name: "Onions",
                img: "https://cdn1.medicalnewstoday.com/content/images/articles/276/276714/red-and-white-onions.jpg"
            },
            {
                name: "Lettuce",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMryvUqv7W0GlhLdb2_NIXkXopTrGQ1SRVVM_4PoS0P8uw8bNw6Q"
            },
            {
                name: "Spinach",
                img: "https://www.bbcgoodfood.com/sites/default/files/spinach.jpg"
            },
            {
                name: "Nectarines",
                img: "http://wallpapers4screen.com/Uploads/26-5-2016/31073/thumb2-fruit-apricots-nectarines-peaches-fruit-plate.jpg"
            },
            {
                name: "Apples",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWfZ1MCw3e8KkJfRDEdKbEz6UNb9I5KrvnezCg9gU09i8xrdKFA"
            },
            {
                name: "Grapes",
                img: "http://prasadimpex.com/wp-content/uploads/2018/02/Black-Grapes-2.jpg"
            },
            {
                name: "Pears",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61w64eKsWPHfBGjU92OIVRn-79wltLv7EswpOJ_gJQqv5_saj"
            },
            {
                name: "Celery",
                img: "http://yesofcorsa.com/wp-content/uploads/2018/04/Celery-Wallpaper-Full-HD-1024x680.jpg"
            },
            {
                name: "Potatoes",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg"
            },
            {
                name: "Kale",
                img: "https://www.yesmagazine.org/issues/how-to-eat-like-our-lives-depend-on-it/one-diet-to-rule-them-all/shutterstock_135308252.jpg/image"
            }
        ],

        show: false
    })
    $("#target").html(rendered);
});

/*
$(document).ready(function(){
    var template = $("#meatList").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
    
        meat: [
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            },
            {
                name: "",
                img: ""
            }
            
        ],

        show: false
    })
    $("#target").html(rendered);
});
*/