
$(document).ready(function(){

        //## liens vers différentes plateformes
        //## pad framapad
        //https://hebdo.framapad.org/p/9giy-4gep6mwc59?lang=fr
        //## pad google
        //https://docs.google.com/document/d/e/2PACX-1vSSjrBTbTAmGAOMMzY3_9_ZHy2c9M2RwaK2Tj_sD3MOnmQRoYDVTL9wWrLZe98X043Q50EQOgJYz2DD/pub
        //## pad oxalis (export en md ):
        //https://pad.oxalis.indie.host/features/download

        $.get("https://pad.oxalis.indie.host/rBPVqaLXQSSnmKw30L0XJQ/download", function(data, status){

        //pour oxalis
        var converter = new showdown.Converter();
        var c = converter.makeHtml(data);
        //## pour google doc
        //var html = $.parseHTML( data );
        //## pour framapad
        //var c = data;
        //var c = $(html[5]).contents();

        //## importe contenu dans la page
        $("#content").html(c);

        //## demare la mise en page
        Bindery.makeBook({
            content: '#content',
            view: Bindery.View.PREVIEW, //## vue par default
            pageSetup: {
                size: { width: '210mm', height: '297mm' },
                margin: { top: '3cm', inner: '2cm', outer: '4cm', bottom: '3cm' },
            },
            rules: [
                //regle de saut de page
                Bindery.PageBreak({ selector: '.frontpage', position: 'before' }),
                Bindery.PageBreak({ selector: 'h2', position: 'both' }),
                Bindery.PageBreak({ selector: 'hr', position: 'before' }),

                //## image à la coupe
                //Bindery.FullBleedSpread({ selector: '.big-figure' }),

                //## image sur deux pages
                //https://evanbrooks.info/bindery/docs/#fullbleedspread

                //## régle spéciale si un élément est coupé d'une page à l'autre
                //## https://evanbrooks.info/bindery/docs/#split
                // Bindery.Split({
                //   selector: 'p',
                //   toNext: 'to-next',
                //   fromPrevious: 'from-previous',
                // }),

                //## régle d'en tête
                //## un peu compliqué mais c'est juste une condition "un operateur ternaire"
                //## si la page est à gauche on affiche le nombre puis le titre 1
                //## sinon titre 2 suivit du numero
                Bindery.RunningHeader({
                  render: (pageInfo) => pageInfo.isLeft
                    ? `${pageInfo.number} · ${pageInfo.heading.h1}`
                    : `${pageInfo.heading.h1} · ${pageInfo.number}`
                }),

                //## régle note de bas de page
                //Bindery.Footnote({
                    //selector: 'p > a',
                    //render: (el, num) => `${num}: Link to ${el.getAttribute('href')}`;
                //}),

                //## voir doc pour TOC et Index si besoin
            ],
        });

      });



})
