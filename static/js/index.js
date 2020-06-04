function showAllPlumbers(occupation, WebsiteCheckedValue, PremiumCheckedValue, county, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4,
                         markerGroupBuilder, markerGroupCarpenter, markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler, usernames, noLocation, userLng, userLat) {
    var req = new XMLHttpRequest();
    var url;
    if (occupation === 'Builder') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/builder_data_website_premium';
            }
            else {
                url = '/builder_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/builder_data_premium';
            }
            else {
                url = '/builder_data';
            }
        }
    }
    else if (occupation === 'Carpenter') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/carpenter_data_website_premium';
            }
            else {
                url = '/carpenter_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/carpenter_data_premium';
            }
            else {
                url = '/carpenter_data';
            }
        }
    }
    else if (occupation === 'Electrician') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/electrician_data_website_premium';
            }
            else {
                url = '/electrician_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/electrician_data_premium';
            }
            else {
                url = '/electrician_data';
            }
        }
    }
    else if (occupation === 'Engineer') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/engineer_data_website_premium';
            }
            else {
                url = '/engineer_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/engineer_data_premium';
            }
            else {
                url = '/engineer_data';
            }
        }
    }
    else if (occupation === 'Heating Contractor') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/heatingContractor_data_website_premium';
            }
            else {
                url = '/heatingContractor_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/heatingContractor_data_premium';
            }
            else {
                url = '/heatingContractor_data';
            }
        }
    }
    else if (occupation === 'Kitchen Fitter') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/kitchenFitter_data_website_premium';
            }
            else {
                url = '/kitchenFitter_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/kitchenFitter_data_premium';
            }
            else {
                url = '/kitchenFitter_data';
            }
        }
    }
    else if (occupation === 'Painter') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/painter_data_website_premium';
            }
            else {
                url = '/painter_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/painter_data_premium';
            }
            else {
                url = '/painter_data';
            }
        }

    }
    else if (occupation === 'Plasterer') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/plasterer_data_website_premium';
            }
            else {
                url = '/plasterer_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/plasterer_data_premium';
            }
            else {
                url = '/plasterer_data';
            }
        }
    }
    else if (occupation === 'Plumber') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/plumber_data_website_premium';
            }
            else {
                url = '/plumber_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/plumber_data_premium';
            }
            else {
                url = '/plumber_data';
            }
        }
    }
    else if (occupation === 'Stone Worker') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/stoneWorker_data_website_premium';
            }
            else {
                url = '/stoneWorker_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/stoneWorker_data_premium';
            }
            else {
                url = '/stoneWorker_data';
            }
        }
    }
    else if (occupation === 'Tiler') {
        if (WebsiteCheckedValue) {
            if (PremiumCheckedValue) {
                url = '/tiler_data_website_premium';
            }
            else {
                url = '/tiler_data_website';
            }
        }
        else {
            if (PremiumCheckedValue) {
                url = '/tiler_data_premium';
            }
            else {
                url = '/tiler_data';
            }
        }
    }
    else {
        console.log('Error encountered reading filtered url');
    }
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);

                var div = document.getElementById('nav-profile2');
                var card = document.createElement('DIV');
                div.innerHTML = "";

                for (let i= 0; i < data.length; i++) {
                    if (noLocation === 0) {
                        var displayMessage = 0;
                        map.setView(new L.LatLng(userLat, userLng), 10);
                        if (usernames.includes(data[i].username)) {
                            displayMessage = 2;
                            if (county !== '' && county === data[i].county) {
                                var card_header_div = document.createElement('DIV');

                                var card_header = document.createElement('H3');
                                var imageAndTextBody = document.createElement('DIV');
                                var card_body_image = document.createElement('DIV');
                                var imageAndText = document.createElement('DIV');
                                imageAndText.classList.add("col-md-12");

                                imageAndTextBody.classList.add("col-md-8");
                                imageAndTextBody.setAttribute("id", "imageAndTextBody");
                                card_body_image.classList.add("col-md-4");

                                var bold = document.createElement("b");
                                bold.appendChild(document.createTextNode("Name: "));
                                var ProfileDetailsH4 = document.createElement('P');
                                ProfileDetailsH4.setAttribute("class", "col-md-6 col-6");
                                ProfileDetailsH4.setAttribute("id", "floatLeft");
                                ProfileDetailsH4.appendChild(bold);

                                var ProfileInfoH4 = document.createElement('P');
                                ProfileInfoH4.setAttribute("class", "col-md-6 col-6");
                                ProfileInfoH4.setAttribute("id", "floatRight");
                                let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                                ProfileInfoH4.appendChild(newText);

                                var bold2 = document.createElement("b");
                                bold2.appendChild(document.createTextNode("Occupation: "));
                                var ProfileDetailsH4_2 = document.createElement('P');
                                ProfileDetailsH4_2.setAttribute("class", "col-md-6 col-6");
                                ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                                ProfileDetailsH4_2.appendChild(bold2);

                                var ProfileInfoH4_2 = document.createElement('P');
                                ProfileInfoH4_2.setAttribute("class", "col-md-6 col-6");
                                ProfileInfoH4_2.setAttribute("id", "floatRight");
                                let newText2 = document.createTextNode(data[i].occupation);
                                ProfileInfoH4_2.appendChild(newText2);

                                var bold3 = document.createElement("b");
                                bold3.appendChild(document.createTextNode("Location: "));
                                var ProfileDetailsH4_3 = document.createElement('P');
                                ProfileDetailsH4_3.setAttribute("class", "col-md-6 col-6");
                                ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                                ProfileDetailsH4_3.appendChild(bold3);

                                var ProfileInfoH4_3 = document.createElement('P');
                                ProfileInfoH4_3.setAttribute("class", "col-md-6 col-6");
                                ProfileInfoH4_3.setAttribute("id", "floatRight");
                                let newText3 = document.createTextNode(data[i].town + ", " + data[i].county);
                                ProfileInfoH4_3.appendChild(newText3);

                                var preium_listings_h4_5 = document.createElement('P');
                                preium_listings_h4_5.classList.add("col-md-12");
                                preium_listings_h4_5.setAttribute("id", "PortfolioLink2");
                                preium_listings_h4_5.innerHTML = "View my Porfolio!";
                                preium_listings_h4_5.href = "#body";
                                preium_listings_h4_5.addEventListener("click", function () {
                                    var username = data[i].username;
                                    var body = document.getElementById('LatestListingsContainer');
                                    body.style.display = 'none';
                                    var occupation = data[i].occupation;
                                    document.getElementById('side_panel').style.display = "none";
                                    viewTradesperson(username, counter);
                                    viewPortfolio(username);
                                    showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                        markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                                    showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                        markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                                });

                                card_header_div.classList.add("col-md-12");
                                card_header_div.setAttribute("id", "tradesperson_header");
                                card_body_image.setAttribute("id", "tradesperson_image");

                                card_header.classList.add("card-header");
                                card.style.display = 'none';
                                card.style.display = 'block';
                                card_header.innerHTML = "" + data[i].company_name;
                                //card_header.innerHTML = "" + data[i].firstname + " " + data[i].lastname;

                                if (data[i].image !== null) {
                                    var imagePic = document.createElement('IMG');
                                    imagePic.src = data[i].image;
                                    card_body_image.appendChild(imagePic);
                                }

                                imageAndTextBody.append(ProfileDetailsH4);
                                imageAndTextBody.append(ProfileInfoH4);
                                imageAndTextBody.append(ProfileDetailsH4_2);
                                imageAndTextBody.append(ProfileInfoH4_2);
                                imageAndTextBody.append(ProfileDetailsH4_3);
                                imageAndTextBody.append(ProfileInfoH4_3);
                                imageAndTextBody.append(preium_listings_h4_5);
                                imageAndText.appendChild(imageAndTextBody);
                                imageAndText.appendChild(card_body_image);

                                card_header_div.appendChild(card_header);
                                card.appendChild(card_header_div);

                                card.appendChild(imageAndText);
                                div.classList.add("scrollable");
                                div.appendChild(card);
                            }
                            if (county === '') {
                                var card_header_div = document.createElement('DIV');

                                var card_header = document.createElement('H3');
                                var imageAndTextBody = document.createElement('DIV');
                                var card_body_image = document.createElement('DIV');
                                var imageAndText = document.createElement('DIV');
                                imageAndText.classList.add("col-md-12");

                                imageAndTextBody.classList.add("col-md-8");
                                imageAndTextBody.setAttribute("id", "imageAndTextBody");
                                card_body_image.classList.add("col-md-4");

                                var bold = document.createElement("b");
                                bold.appendChild(document.createTextNode("Name: "));
                                var ProfileDetailsH4 = document.createElement('P');
                                ProfileDetailsH4.setAttribute("class", "col-md-6 col-6");
                                ProfileDetailsH4.setAttribute("id", "floatLeft");
                                ProfileDetailsH4.appendChild(bold);

                                var ProfileInfoH4 = document.createElement('P');
                                ProfileInfoH4.setAttribute("class", "col-md-6 col-6");
                                ProfileInfoH4.setAttribute("id", "floatRight");
                                let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                                ProfileInfoH4.appendChild(newText);

                                var bold2 = document.createElement("b");
                                bold2.appendChild(document.createTextNode("Occupation: "));
                                var ProfileDetailsH4_2 = document.createElement('P');
                                ProfileDetailsH4_2.setAttribute("class", "col-md-6 col-6");
                                ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                                ProfileDetailsH4_2.appendChild(bold2);

                                var ProfileInfoH4_2 = document.createElement('P');
                                ProfileInfoH4_2.setAttribute("class", "col-md-6 col-6");
                                ProfileInfoH4_2.setAttribute("id", "floatRight");
                                let newText2 = document.createTextNode(data[i].occupation);
                                ProfileInfoH4_2.appendChild(newText2);

                                var bold3 = document.createElement("b");
                                bold3.appendChild(document.createTextNode("Location: "));
                                var ProfileDetailsH4_3 = document.createElement('P');
                                ProfileDetailsH4_3.setAttribute("class", "col-md-6 col-6");
                                ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                                ProfileDetailsH4_3.appendChild(bold3);

                                var ProfileInfoH4_3 = document.createElement('P');
                                ProfileInfoH4_3.setAttribute("class", "col-md-6 col-6");
                                ProfileInfoH4_3.setAttribute("id", "floatRight");
                                let newText3 = document.createTextNode(data[i].town + ", " + data[i].county);
                                ProfileInfoH4_3.appendChild(newText3);

                                var preium_listings_h4_5 = document.createElement('P');
                                preium_listings_h4_5.classList.add("col-md-12");
                                preium_listings_h4_5.setAttribute("id", "PortfolioLink2");
                                preium_listings_h4_5.innerHTML = "View my Porfolio!";
                                preium_listings_h4_5.href = "#body";
                                preium_listings_h4_5.addEventListener("click", function () {
                                    var username = data[i].username;
                                    var occupation = data[i].occupation;
                                    document.getElementById('side_panel').style.display = "none";
                                    viewTradesperson(username, counter);
                                    viewPortfolio(username);
                                    showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                        markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                                    showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                        markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                                });

                                card_header_div.classList.add("col-md-12");
                                card_header_div.setAttribute("id", "tradesperson_header");
                                card_body_image.setAttribute("id", "tradesperson_image");

                                card_header.classList.add("card-header");
                                card.style.display = 'none';
                                card.style.display = 'block';
                                card_header.innerHTML = "" + data[i].company_name;

                                if (data[i].image !== null) {
                                    var imagePic = document.createElement('IMG');
                                    imagePic.src = data[i].image;
                                    card_body_image.appendChild(imagePic);
                                }

                                imageAndTextBody.append(ProfileDetailsH4);
                                imageAndTextBody.append(ProfileInfoH4);
                                imageAndTextBody.append(ProfileDetailsH4_2);
                                imageAndTextBody.append(ProfileInfoH4_2);
                                imageAndTextBody.append(ProfileDetailsH4_3);
                                imageAndTextBody.append(ProfileInfoH4_3);
                                imageAndTextBody.append(preium_listings_h4_5);
                                imageAndText.appendChild(imageAndTextBody);
                                imageAndText.appendChild(card_body_image);

                                card_header_div.appendChild(card_header);
                                card.appendChild(card_header_div);

                                card.appendChild(imageAndText);
                                div.classList.add("scrollable");
                                div.appendChild(card);
                            }
                        }
                        if (displayMessage !== 2) {
                            var error_message_div = document.createElement('DIV');
                            error_message_div.setAttribute("class", "col-md-12 col-12");
                            error_message_div.setAttribute("id", "errorMessage");
                            let errorMessageText = document.createTextNode('Sorry there are no tradespeople nearby');
                            let errorMessageText2 = document.createTextNode('Please try again another day!');
                            var breakLine = document.createElement('BR');
                            error_message_div.appendChild(errorMessageText);
                            error_message_div.appendChild(breakLine);
                            error_message_div.appendChild(breakLine);
                            error_message_div.appendChild(errorMessageText2);
                            div.appendChild(error_message_div);
                        }
                    }
                    if (noLocation === 1) {
                        if (county !== '' && county === data[i].county) {
                            var card_header_div = document.createElement('DIV');

                            var card_header = document.createElement('H3');
                            var imageAndTextBody = document.createElement('DIV');
                            var card_body_image = document.createElement('DIV');
                            var imageAndText = document.createElement('DIV');
                            imageAndText.classList.add("col-md-12");

                            imageAndTextBody.classList.add("col-md-8");
                            imageAndTextBody.setAttribute("id", "imageAndTextBody");
                            card_body_image.classList.add("col-md-4");

                            var bold = document.createElement("b");
                            bold.appendChild(document.createTextNode("Name: "));
                            var ProfileDetailsH4 = document.createElement('P');
                            ProfileDetailsH4.setAttribute("class", "col-md-6 col-6");
                            ProfileDetailsH4.setAttribute("id", "floatLeft");
                            ProfileDetailsH4.appendChild(bold);

                            var ProfileInfoH4 = document.createElement('P');
                            ProfileInfoH4.setAttribute("class", "col-md-6 col-6");
                            ProfileInfoH4.setAttribute("id", "floatRight");
                            let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                            ProfileInfoH4.appendChild(newText);

                            var bold2 = document.createElement("b");
                            bold2.appendChild(document.createTextNode("Occupation: "));
                            var ProfileDetailsH4_2 = document.createElement('P');
                            ProfileDetailsH4_2.setAttribute("class", "col-md-6 col-6");
                            ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                            ProfileDetailsH4_2.appendChild(bold2);

                            var ProfileInfoH4_2 = document.createElement('P');
                            ProfileInfoH4_2.setAttribute("class", "col-md-6 col-6");
                            ProfileInfoH4_2.setAttribute("id", "floatRight");
                            let newText2 = document.createTextNode(data[i].occupation);
                            ProfileInfoH4_2.appendChild(newText2);

                            var bold3 = document.createElement("b");
                            bold3.appendChild(document.createTextNode("Location: "));
                            var ProfileDetailsH4_3 = document.createElement('P');
                            ProfileDetailsH4_3.setAttribute("class", "col-md-6 col-6");
                            ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                            ProfileDetailsH4_3.appendChild(bold3);

                            var ProfileInfoH4_3 = document.createElement('P');
                            ProfileInfoH4_3.setAttribute("class", "col-md-6 col-6");
                            ProfileInfoH4_3.setAttribute("id", "floatRight");
                            let newText3 = document.createTextNode(data[i].town + ", " + data[i].county);
                            ProfileInfoH4_3.appendChild(newText3);

                            var preium_listings_h4_5 = document.createElement('P');
                            preium_listings_h4_5.classList.add("col-md-12");
                            preium_listings_h4_5.setAttribute("id", "PortfolioLink2");
                            preium_listings_h4_5.innerHTML = "View my Porfolio!";
                            preium_listings_h4_5.href = "#body";
                            preium_listings_h4_5.addEventListener("click", function () {
                                var username = data[i].username;
                                var body = document.getElementById('LatestListingsContainer');
                                body.style.display = 'none';
                                var occupation = data[i].occupation;
                                document.getElementById('side_panel').style.display = "none";
                                viewTradesperson(username, counter);
                                viewPortfolio(username);
                                showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                    markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                                showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                    markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                            });

                            card_header_div.classList.add("col-md-12");
                            card_header_div.setAttribute("id", "tradesperson_header");
                            card_body_image.setAttribute("id", "tradesperson_image");

                            card_header.classList.add("card-header");
                            card.style.display = 'none';
                            card.style.display = 'block';
                            card_header.innerHTML = "" + data[i].company_name;
                            //card_header.innerHTML = "" + data[i].firstname + " " + data[i].lastname;

                            if (data[i].image !== null) {
                                var imagePic = document.createElement('IMG');
                                imagePic.src = data[i].image;
                                card_body_image.appendChild(imagePic);
                            }

                            imageAndTextBody.append(ProfileDetailsH4);
                            imageAndTextBody.append(ProfileInfoH4);
                            imageAndTextBody.append(ProfileDetailsH4_2);
                            imageAndTextBody.append(ProfileInfoH4_2);
                            imageAndTextBody.append(ProfileDetailsH4_3);
                            imageAndTextBody.append(ProfileInfoH4_3);
                            imageAndTextBody.append(preium_listings_h4_5);
                            imageAndText.appendChild(imageAndTextBody);
                            imageAndText.appendChild(card_body_image);

                            card_header_div.appendChild(card_header);
                            card.appendChild(card_header_div);

                            card.appendChild(imageAndText);
                            div.classList.add("scrollable");
                            div.appendChild(card);
                        }
                        if (county === '') {
                            var card_header_div = document.createElement('DIV');

                            var card_header = document.createElement('H3');
                            var imageAndTextBody = document.createElement('DIV');
                            var card_body_image = document.createElement('DIV');
                            var imageAndText = document.createElement('DIV');
                            imageAndText.classList.add("col-md-12");

                            imageAndTextBody.classList.add("col-md-8");
                            imageAndTextBody.setAttribute("id", "imageAndTextBody");
                            card_body_image.classList.add("col-md-4");

                            var bold = document.createElement("b");
                            bold.appendChild(document.createTextNode("Name: "));
                            var ProfileDetailsH4 = document.createElement('P');
                            ProfileDetailsH4.setAttribute("class", "col-md-6 col-6");
                            ProfileDetailsH4.setAttribute("id", "floatLeft");
                            ProfileDetailsH4.appendChild(bold);

                            var ProfileInfoH4 = document.createElement('P');
                            ProfileInfoH4.setAttribute("class", "col-md-6 col-6");
                            ProfileInfoH4.setAttribute("id", "floatRight");
                            let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                            ProfileInfoH4.appendChild(newText);

                            var bold2 = document.createElement("b");
                            bold2.appendChild(document.createTextNode("Occupation: "));
                            var ProfileDetailsH4_2 = document.createElement('P');
                            ProfileDetailsH4_2.setAttribute("class", "col-md-6 col-6");
                            ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                            ProfileDetailsH4_2.appendChild(bold2);

                            var ProfileInfoH4_2 = document.createElement('P');
                            ProfileInfoH4_2.setAttribute("class", "col-md-6 col-6");
                            ProfileInfoH4_2.setAttribute("id", "floatRight");
                            let newText2 = document.createTextNode(data[i].occupation);
                            ProfileInfoH4_2.appendChild(newText2);

                            var bold3 = document.createElement("b");
                            bold3.appendChild(document.createTextNode("Location: "));
                            var ProfileDetailsH4_3 = document.createElement('P');
                            ProfileDetailsH4_3.setAttribute("class", "col-md-6 col-6");
                            ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                            ProfileDetailsH4_3.appendChild(bold3);

                            var ProfileInfoH4_3 = document.createElement('P');
                            ProfileInfoH4_3.setAttribute("class", "col-md-6 col-6");
                            ProfileInfoH4_3.setAttribute("id", "floatRight");
                            let newText3 = document.createTextNode(data[i].town + ", " + data[i].county);
                            ProfileInfoH4_3.appendChild(newText3);

                            var preium_listings_h4_5 = document.createElement('P');
                            preium_listings_h4_5.classList.add("col-md-12");
                            preium_listings_h4_5.setAttribute("id", "PortfolioLink2");
                            preium_listings_h4_5.innerHTML = "View my Porfolio!";
                            preium_listings_h4_5.href = "#body";
                            preium_listings_h4_5.addEventListener("click", function () {
                                var username = data[i].username;
                                var occupation = data[i].occupation;
                                document.getElementById('side_panel').style.display = "none";
                                viewTradesperson(username, counter);
                                viewPortfolio(username);
                                showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                    markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                                showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                    markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                            });

                            card_header_div.classList.add("col-md-12");
                            card_header_div.setAttribute("id", "tradesperson_header");
                            card_body_image.setAttribute("id", "tradesperson_image");

                            card_header.classList.add("card-header");
                            card.style.display = 'none';
                            card.style.display = 'block';
                            card_header.innerHTML = "" + data[i].company_name;

                            if (data[i].image !== null) {
                                var imagePic = document.createElement('IMG');
                                imagePic.src = data[i].image;
                                card_body_image.appendChild(imagePic);
                            }

                            imageAndTextBody.append(ProfileDetailsH4);
                            imageAndTextBody.append(ProfileInfoH4);
                            imageAndTextBody.append(ProfileDetailsH4_2);
                            imageAndTextBody.append(ProfileInfoH4_2);
                            imageAndTextBody.append(ProfileDetailsH4_3);
                            imageAndTextBody.append(ProfileInfoH4_3);
                            imageAndTextBody.append(preium_listings_h4_5);
                            imageAndText.appendChild(imageAndTextBody);
                            imageAndText.appendChild(card_body_image);

                            card_header_div.appendChild(card_header);
                            card.appendChild(card_header_div);

                            card.appendChild(imageAndText);
                            div.classList.add("scrollable");
                            div.appendChild(card);
                        }
                    }
                }
            }
        };
        document.getElementById('side_panel').style.display = "block";
        var map2 = document.getElementById('map');
        map2.classList.remove("col-md-12");
        map2.classList.add("col-md-8");
        req.open("GET", url, true);
        req.send();
}

function showAllPremiumTradespeople(map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter, markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler) {
    var req = new XMLHttpRequest();
    var url = '/getAllPremiumTradespeople';
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);
                for (let i= 0; i < 4; i++) {
                     var preium_listings = document.getElementById('PremiumListings');
                     var preium_listings_image_div = document.createElement('DIV');
                     preium_listings_image_div.setAttribute("class", "col-md-3 col-sm-6");
                     preium_listings_image_div.setAttribute("id", "PremiumListingsDiv");

                     if (counter === 1) {
                         var imageDiv = document.createElement('DIV');
                         var favDiv = document.createElement('DIV');
                         favDiv.classList.add("favDiv");
                         var i_element = document.createElement('I');
                         i_element.classList.add("i_element");
                         var span = document.createElement('SPAN');
                         span.classList.add("span");
                         span.innerHTML = 'Button';
                         imageDiv.classList.add("container");
                         imageDiv.setAttribute("id", "PremiumListingsImage");
                         if (data[i].image !== null) {
                             var imagePic = document.createElement('IMG');
                             imagePic.classList.add("PremiumListings1");
                             imagePic.src = data[i].image;
                         }
                         favDiv.appendChild(i_element);
                         favDiv.appendChild(span);
                         imageDiv.appendChild(imagePic);
                         imageDiv.appendChild(favDiv);
                         i_element.addEventListener("click", function () {
                             //AJAX Implementation
                             $(this).toggleClass("press", 1000);
                             const values = [data[i].firstname, data[i].lastname, data[i].email, data[i].phone_no,
                                 data[i].company_name, data[i].occupation, data[i].town, data[i].county, data[i].image];
                             $.ajax({
                                 type: "POST",
                                 url: "/edit_favorites/",
                                 data: {'tradesperson': values},
                                 traditional: true,
                                 dataType: 'html',
                                 success: function () {
                                     $('#message').html("<h2>Favourite Submitted!</h2>")
                                 }
                             });
                         });
                     }
                     else {
                         var imageDiv = document.createElement('DIV');
                         imageDiv.classList.add("container");
                         if (data[i].image !== null) {
                             var imagePic = document.createElement('IMG');
                             imagePic.classList.add("PremiumListings1");
                             imagePic.src = data[i].image;
                         }
                         imageDiv.appendChild(imagePic);
                     }

                     var preium_listings_details = document.createElement('DIV');
                     var preium_listings_image_div_outer = document.createElement('DIV');
                     preium_listings_details.classList.add("PremiumDetails");
                     preium_listings_image_div_outer.classList.add("container");
                     preium_listings_image_div_outer.setAttribute("id", "PremiumDetailsInner");
                     var preium_listings_h3 = document.createElement('H3');
                     preium_listings_h3.classList.add("service-heading");
                     preium_listings_h3.innerHTML = data[i].company_name;
                     preium_listings_h3.setAttribute("id", "PremiumListingsName");

                    var bold = document.createElement("b");
                    bold.appendChild(document.createTextNode(" Name: "));
                    var ProfileDetailsH4 = document.createElement('P');
                    ProfileDetailsH4.className += "col-md-5 col-5";
                    ProfileDetailsH4.setAttribute("id", "floatLeft");
                    ProfileDetailsH4.appendChild(bold);

                    var ProfileInfoH4 = document.createElement('P');
                    ProfileInfoH4.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4.setAttribute("id", "floatRight");
                    let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                    ProfileInfoH4.appendChild(newText);

                     var bold2 = document.createElement("b");
                    bold2.appendChild(document.createTextNode(" Occupation: "));
                    var ProfileDetailsH4_2 = document.createElement('P');
                    ProfileDetailsH4_2.className += "col-md-5 col-5";
                    ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                    ProfileDetailsH4_2.appendChild(bold2);

                    var ProfileInfoH4_2 = document.createElement('P');
                    ProfileInfoH4_2.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4_2.setAttribute("id", "floatRight");
                    let newText2 = document.createTextNode(data[i].occupation);
                    ProfileInfoH4_2.appendChild(newText2);

                    var bold3 = document.createElement("b");
                    bold3.appendChild(document.createTextNode(" Town: "));
                    var ProfileDetailsH4_3 = document.createElement('P');
                    ProfileDetailsH4_3.className += "col-md-5 col-5";
                    ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                    ProfileDetailsH4_3.appendChild(bold3);

                    var ProfileInfoH4_3 = document.createElement('P');
                    ProfileInfoH4_3.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4_3.setAttribute("id", "floatRight");
                    let newText3 = document.createTextNode(data[i].town);
                    ProfileInfoH4_3.appendChild(newText3);

                    var bold4 = document.createElement("b");
                    bold4.appendChild(document.createTextNode(" County: "));
                    var ProfileDetailsH4_4 = document.createElement('P');
                    ProfileDetailsH4_4.className += "col-md-5 col-5";
                    ProfileDetailsH4_4.setAttribute("id", "floatLeft");
                    ProfileDetailsH4_4.appendChild(bold4);

                    var ProfileInfoH4_4 = document.createElement('P');
                    ProfileInfoH4_4.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4_4.setAttribute("id", "floatRight");
                    let newText4 = document.createTextNode(data[i].county);
                    ProfileInfoH4_4.appendChild(newText4);

                     var preium_listings_h4_5 = document.createElement('P');
                     preium_listings_h4_5.classList.add("col-md-12");
                     preium_listings_h4_5.setAttribute("id", "PortfolioLink");
                     preium_listings_h4_5.innerHTML = "View my Porfolio!";
                     preium_listings_h4_5.href = "#body";

                     preium_listings_h4_5.addEventListener("click", function() {
                        var username = data[i].username;
                        var body = document.getElementById('LatestListingsContainer');
                        body.style.display = 'none';
                        var occupation = data[i].occupation;
                        viewTradesperson(username, counter);
                        viewPortfolio(username);
                        showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                        showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                     });

                    if (data[i].image !== null) {
                        preium_listings_image_div_outer.appendChild(imageDiv);
                    }
                    preium_listings_details.appendChild(preium_listings_h3);
                    preium_listings_details.appendChild(ProfileDetailsH4);
                    preium_listings_details.appendChild(ProfileInfoH4);
                    preium_listings_details.appendChild(ProfileDetailsH4_2);
                    preium_listings_details.appendChild(ProfileInfoH4_2);
                    preium_listings_details.appendChild(ProfileDetailsH4_3);
                    preium_listings_details.appendChild(ProfileInfoH4_3);
                    preium_listings_details.appendChild(ProfileDetailsH4_4);
                    preium_listings_details.appendChild(ProfileInfoH4_4);
                    preium_listings_details.appendChild(preium_listings_h4_5);
                    preium_listings_image_div_outer.appendChild(preium_listings_details);
                    preium_listings_image_div.appendChild(preium_listings_image_div_outer);
                    preium_listings.appendChild(preium_listings_image_div);
                }
            }
        };
        req.open("GET", url, true);
        req.send();
}

function showAllLatestTradespeople(map,markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler) {
    var req = new XMLHttpRequest();
    var url = '/getAllLatestTradespeople';
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);
                var dataLength = data.length - 1;
                var LatestLength = dataLength - 4;
                for (let i = dataLength; i > LatestLength; i--) {
                     var preium_listings = document.getElementById('LatestListings');
                     var preium_listings_image_div = document.createElement('DIV');
                     preium_listings_image_div.setAttribute("class", "col-md-3 col-sm-6");
                     preium_listings_image_div.setAttribute("id", "LatestListingsDiv");


                     if (counter === 1) {
                         var imageDiv = document.createElement('DIV');
                         var favDiv = document.createElement('DIV');
                         favDiv.classList.add("favDiv");
                         var i_element = document.createElement('I');
                         i_element.classList.add("i_element");
                         var span = document.createElement('SPAN');
                         span.classList.add("span");
                         span.innerHTML = 'Button';
                         imageDiv.classList.add("container");
                         imageDiv.setAttribute("id", "PremiumListingsImage");
                         if (data[i].image !== null) {
                             var imagePic = document.createElement('IMG');
                             imagePic.classList.add("PremiumListings1");
                             //imagePic.src = "'{{ MEDIA }}'/images/tools.png";
                             imagePic.src = data[i].image;
                         }
                         favDiv.appendChild(i_element);
                         favDiv.appendChild(span);
                         imageDiv.appendChild(imagePic);
                         imageDiv.appendChild(favDiv);
                         i_element.addEventListener("click", function () {
                             $(this).toggleClass("press", 1000);
                             const values = [data[i].firstname, data[i].lastname, data[i].email, data[i].phone_no,
                                 data[i].company_name, data[i].occupation, data[i].town, data[i].county, data[i].image];
                             $.ajax({
                                 type: "POST",
                                 url: "/edit_favorites/",
                                 data: {'tradesperson': values},
                                 traditional: true,
                                 dataType: 'html',
                                 success: function () {
                                     $('#message').html("<h2>Favourite Submitted!</h2>")
                                 }
                             });
                         });
                     }
                     else {
                         var imageDiv = document.createElement('DIV');
                         imageDiv.classList.add("container");
                         if (data[i].image !== null) {
                             var imagePic = document.createElement('IMG');
                             imagePic.classList.add("PremiumListings1");
                             imagePic.src = data[i].image;
                         }
                         imageDiv.appendChild(imagePic);
                     }

                     var latest_listings_details = document.createElement('DIV');
                     var preium_listings_image_div_outer = document.createElement('DIV');
                     latest_listings_details.classList.add("LatestDetails");
                     preium_listings_image_div_outer.classList.add("container");
                     preium_listings_image_div_outer.setAttribute("id", "PremiumDetailsInner");
                     var latest_listings_h3 = document.createElement('H3');
                     latest_listings_h3.classList.add("service-heading");
                     latest_listings_h3.innerHTML = data[i].company_name;
                     latest_listings_h3.setAttribute("id", "LatestListingsName");

                    var bold = document.createElement("b");
                    bold.appendChild(document.createTextNode(" Name: "));
                    var ProfileDetailsH4 = document.createElement('P');
                    ProfileDetailsH4.className += "col-md-5 col-5";
                    ProfileDetailsH4.setAttribute("id", "floatLeft");
                    ProfileDetailsH4.appendChild(bold);

                    var ProfileInfoH4 = document.createElement('P');
                    ProfileInfoH4.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4.setAttribute("id", "floatRight");
                    let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                    ProfileInfoH4.appendChild(newText);

                    var bold2 = document.createElement("b");
                    bold2.appendChild(document.createTextNode(" Occupation: "));
                    var ProfileDetailsH4_2 = document.createElement('P');
                    ProfileDetailsH4_2.className += "col-md-5 col-5";
                    ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                    ProfileDetailsH4_2.appendChild(bold2);

                    var ProfileInfoH4_2 = document.createElement('P');
                    ProfileInfoH4_2.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4_2.setAttribute("id", "floatRight");
                    let newText2 = document.createTextNode(data[i].occupation);
                    ProfileInfoH4_2.appendChild(newText2);

                    var bold3 = document.createElement("b");
                    bold3.appendChild(document.createTextNode(" Town: "));
                    var ProfileDetailsH4_3 = document.createElement('P');
                    ProfileDetailsH4_3.className += "col-md-5 col-5";
                    ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                    ProfileDetailsH4_3.appendChild(bold3);

                    var ProfileInfoH4_3 = document.createElement('P');
                    ProfileInfoH4_3.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4_3.setAttribute("id", "floatRight");
                    let newText3 = document.createTextNode(data[i].town);
                    ProfileInfoH4_3.appendChild(newText3);

                    var bold4 = document.createElement("b");
                    bold4.appendChild(document.createTextNode(" County: "));
                    var ProfileDetailsH4_4 = document.createElement('P');
                    ProfileDetailsH4_4.className += "col-md-5 col-5";
                    ProfileDetailsH4_4.setAttribute("id", "floatLeft");
                    ProfileDetailsH4_4.appendChild(bold4);

                    var ProfileInfoH4_4 = document.createElement('P');
                    ProfileInfoH4_4.setAttribute("class", "col-md-7 col-7");
                    ProfileInfoH4_4.setAttribute("id", "floatRight");
                    let newText4 = document.createTextNode(data[i].county);
                    ProfileInfoH4_4.appendChild(newText4);

                     var preium_listings_h4_5 = document.createElement('P');
                     preium_listings_h4_5.classList.add("col-md-12");
                     preium_listings_h4_5.setAttribute("id", "PortfolioLink");
                     preium_listings_h4_5.innerHTML = "View my Porfolio!";
                     preium_listings_h4_5.href = "#body";
                     preium_listings_h4_5.addEventListener("click", function() {
                        var username = data[i].username;
                        var occupation = data[i].occupation;
                        var body = document.getElementById('listingsContainer');
                        body.style.display = 'none';
                        viewTradesperson(username, counter);
                        viewPortfolio(username);
                        showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                        showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                     });


                     if (data[i].image !== null) {
                         preium_listings_image_div_outer.appendChild(imageDiv);
                     }
                    latest_listings_details.appendChild(latest_listings_h3);
                    latest_listings_details.appendChild(ProfileDetailsH4);
                    latest_listings_details.appendChild(ProfileInfoH4);
                    latest_listings_details.appendChild(ProfileDetailsH4_2);
                    latest_listings_details.appendChild(ProfileInfoH4_2);
                    latest_listings_details.appendChild(ProfileDetailsH4_3);
                    latest_listings_details.appendChild(ProfileInfoH4_3);
                    latest_listings_details.appendChild(ProfileDetailsH4_4);
                    latest_listings_details.appendChild(ProfileInfoH4_4);
                    latest_listings_details.appendChild(preium_listings_h4_5);
                    preium_listings_image_div_outer.appendChild(latest_listings_details);
                    preium_listings_image_div.appendChild(preium_listings_image_div_outer);
                    preium_listings.appendChild(preium_listings_image_div);
                }
            }
        };
        req.open("GET", url, true);
        req.send();
}

function searchQuery(map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter, markerGroupEngineer, markerGroupHeating, markerGroupPlasterer,
                     markerGroupStone, markerGroupTiler, usernames, noLocation, userLat, userLng) {
    document.getElementById('body').scrollIntoView();
    var occupationEvent = document.getElementById("options");
    occupation = occupationEvent.options[occupationEvent.selectedIndex].value;
    var countyEvent = document.getElementById("options2");
    county = countyEvent.options[countyEvent.selectedIndex].value;
    var WebsiteCheckedValue = document.querySelector('.WebsiteCheckbox').checked;
    var PremiumCheckedValue = document.querySelector('.PremiumCheckbox').checked;

    showAllPlumbers(occupation, WebsiteCheckedValue, PremiumCheckedValue, county, map, markerGroup, markerGroup1, markerGroup2, counter, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler, usernames, noLocation, userLng, userLat);
}


function viewPortfolio(username) {
    var req = new XMLHttpRequest();
    var url = '/getPortfolio';
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);
                var portfolioListings = document.getElementById('portfolioPanel');
                for (var i = 0; i < data.length; i++) {
                    if (data[i].author === username) {
                        portfolioListings.innerHTML = "";
                        var portfolioListingsDiv = document.createElement('DIV');
                        portfolioListingsDiv.classList.add("portfolioListingsName");
                        portfolioListingsDiv.innerHTML = data[i].text;
                        portfolioListings.appendChild(portfolioListingsDiv);
                    }
                }
            }
        };
        document.getElementById('side_panel').style.display = "block";
        var map = document.getElementById('map');
        map.classList.remove("col-md-9");
        map.classList.add("col-md-12");
        req.open("GET", url, true);
        req.send();
}

function viewTradesperson(username, counter) {
    window.location.href = '#profileListingsSection';
    var filterDropdown = document.getElementById('OuterDropdownContainer');
    var premiumListings = document.getElementById('listingsContainer');
    var portfolioListings = document.getElementById('portfolioListings');
    filterDropdown.style.display = 'none';
    premiumListings.style.paddingTop = "1.5%";
    portfolioListings.style.paddingTop = "4.5%";
    var req = new XMLHttpRequest();
    var url = '/getAllTradespeople';
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === username) {
                        var tradespersonListings = document.getElementById('tradespersonPanel');
                        tradespersonListings.innerHTML = "";
                        var tradespersonListingsDiv = document.createElement('DIV');
                        tradespersonListingsDiv.classList.add("portfolioListingsDiv");
                        if (counter === 1) {
                            var imageDiv = document.createElement('DIV');
                            var favDiv = document.createElement('DIV');
                            favDiv.classList.add("favDiv2");
                            var i_element = document.createElement('I');
                            i_element.classList.add("i_elementPortfolio");
                            var span = document.createElement('SPAN');
                            span.classList.add("span");
                            span.innerHTML = 'Button';
                            imageDiv.classList.add("container");
                            imageDiv.setAttribute("id", "PremiumListingsImage");
                            if (data[i].image !== null) {
                                var imagePic = document.createElement('IMG');
                                imagePic.classList.add("porfileImg");
                                imagePic.src = data[i].image;
                            }
                            favDiv.appendChild(i_element);
                            favDiv.appendChild(span);
                            imageDiv.appendChild(imagePic);
                            imageDiv.appendChild(favDiv);
                            i_element.addEventListener("click", function () {
                                //AJAX Implementation
                                $(this).toggleClass("press", 1000);
                                const values = [data[i].firstname, data[i].lastname, data[i].email, data[i].phone_no,
                                    data[i].company_name, data[i].occupation, data[i].town, data[i].county, data[i].image];
                                $.ajax({
                                    type: "POST",
                                    url: "/edit_favorites/",
                                    data: {'tradesperson': values},
                                    traditional: true,
                                    dataType: 'html',
                                    success: function () {
                                        $('#message').html("<h2>Favourite Submitted!</h2>")
                                    }
                                });
                            });
                        }
                        else {
                            var imageDiv = document.createElement('DIV');
                            imageDiv.classList.add("container");
                            if (data[i].image !== null) {
                                var imagePic = document.createElement('IMG');
                                imagePic.classList.add("porfileImg");
                                imagePic.src = data[i].image;
                            }
                            imageDiv.appendChild(imagePic);
                        }

                        var ProfileDetails = document.createElement('DIV');
                        ProfileDetails.classList.add("row");
                        ProfileDetails.setAttribute("id", "LatestDetails");
                        var ProfileDetailsH1 = document.createElement('H1');
                        ProfileDetailsH1.classList.add("service-heading");
                        if (data[i].company_name !== null) {
                            ProfileDetailsH1.innerHTML = data[i].company_name;
                        }
                        else {
                            ProfileDetailsH1.innerHTML = data[i].firstname + " " + data[i].lastname;
                        }
                            ProfileDetailsH1.setAttribute("id", "profileDetailsName");

                        if (data[i].company_name !== null) {
                            var bold = document.createElement("b");
                            bold.appendChild(document.createTextNode(" Name: "));
                            var ProfileDetailsH4 = document.createElement('P');
                            ProfileDetailsH4.className += "col-md-6 col-6 fa fa-user-tie";
                            ProfileDetailsH4.appendChild(bold);

                            var ProfileInfoH4 = document.createElement('P');
                            ProfileInfoH4.setAttribute("class", "col-md-5 col-5");
                            ProfileInfoH4.setAttribute("id", "floatLeft");
                            let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                            ProfileInfoH4.appendChild(newText);
                        }


                        var bold2 = document.createElement("b");
                        bold2.appendChild(document.createTextNode(" Occupation: "));
                        var ProfileDetailsH4_2 = document.createElement('P');
                        if (data[i].occupation === 'Painter') {
                            ProfileDetailsH4_2.className += "col-md-6 col-6 fa fa-paint-roller";
                        }
                        else if (data[i].occupation === 'Plumber') {
                            ProfileDetailsH4_2.className += "col-md-6 col-6 fa fa-tools";
                        }
                        else {
                            ProfileDetailsH4_2.className += "col-md-6 col-6 fa fa-toolbox";
                        }

                        ProfileDetailsH4_2.appendChild(bold2);

                        var ProfileInfoH4_2 = document.createElement('P');
                        ProfileInfoH4_2.setAttribute("class", "col-md-5 col-5");
                        ProfileInfoH4_2.setAttribute("id", "floatLeft");
                        let newText2 = document.createTextNode(data[i].occupation);
                        ProfileInfoH4_2.appendChild(newText2);

                        var bold3 = document.createElement("b");
                        bold3.appendChild(document.createTextNode(" Location: "));
                        var ProfileDetailsH4_3 = document.createElement('P');
                        ProfileDetailsH4_3.className += "col-md-6 col-6 fa fa-map-marker-alt";
                        ProfileDetailsH4_3.appendChild(bold3);

                        var ProfileInfoH4_3 = document.createElement('P');
                        ProfileInfoH4_3.setAttribute("class", "col-md-5 col-5");
                        ProfileInfoH4_3.setAttribute("id", "floatLeft");
                        let newText3 = document.createTextNode(data[i].town + ", " + data[i].county);
                        ProfileInfoH4_3.appendChild(newText3);

                        var bold4 = document.createElement("b");
                        bold4.appendChild(document.createTextNode(" Working Hours: "));
                        var ProfileDetailsH4_4 = document.createElement('P');
                        ProfileDetailsH4_4.className += "col-md-6 col-6 far fa-clock";
                        ProfileDetailsH4_4.appendChild(bold4);

                        var ProfileInfoH4_4 = document.createElement('P');
                        ProfileInfoH4_4.setAttribute("class", "col-md-5 col-5");
                        ProfileInfoH4_4.setAttribute("id", "floatLeft");
                        let newText4 = document.createTextNode(data[i].working_hours);
                        ProfileInfoH4_4.appendChild(newText4);

                        var bold5 = document.createElement("b");
                        bold5.appendChild(document.createTextNode(" Phone: "));
                        var ProfileDetailsH4_5 = document.createElement('P');
                        ProfileDetailsH4_5.className += "col-md-6 col-6 fa fa-phone";
                        ProfileDetailsH4_5.appendChild(bold5);

                        var ProfileInfoH4_5 = document.createElement('P');
                        ProfileInfoH4_5.setAttribute("class", "col-md-5 col-5");
                        ProfileInfoH4_5.setAttribute("id", "floatLeft");
                        let newText5 = document.createTextNode(data[i].phone_no);
                        ProfileInfoH4_5.appendChild(newText5);

                        var bold6 = document.createElement("b");
                        bold6.appendChild(document.createTextNode(" Email: "));
                        var ProfileDetailsH4_6 = document.createElement('P');
                        ProfileDetailsH4_6.className += "col-md-6 col-6 fa fa-inbox";
                        ProfileDetailsH4_6.appendChild(bold6);

                        var ProfileInfoH4_6 = document.createElement('a');
                        ProfileInfoH4_6.setAttribute("class", "col-md-5 col-5");
                        ProfileInfoH4_6.setAttribute("id", "floatLeft");
                        let newText6 = document.createTextNode(data[i].email);
                        ProfileInfoH4_6.appendChild(newText6);
                        ProfileInfoH4_6.href = 'mailto:' + data[i].website_url;

                        if (data[i].website_url !== null) {
                            var bold7 = document.createElement("b");
                            bold7.appendChild(document.createTextNode(" Website: "));
                            var ProfileDetailsH4_7 = document.createElement('P');
                            ProfileDetailsH4_7.className += "col-md-6 col-6 fa fa-desktop";
                            ProfileDetailsH4_7.appendChild(bold7);

                            var ProfileInfoH4_7 = document.createElement('a');
                            ProfileInfoH4_7.setAttribute("class", "col-md-5 col-5");
                            ProfileInfoH4_7.setAttribute("id", "floatLeft");
                            let newText7 = document.createTextNode(data[i].website_url);
                            ProfileInfoH4_7.appendChild(newText7);
                            ProfileInfoH4_7.href = 'http://' + data[i].website_url;
                        }

                        tradespersonListingsDiv.appendChild(ProfileDetailsH1);
                        if (data[i].image !== null) {
                            tradespersonListingsDiv.appendChild(imageDiv);
                        }

                        if (data[i].company_name !== null) {
                            ProfileDetails.appendChild(ProfileDetailsH4);
                            ProfileDetails.appendChild(ProfileInfoH4);
                        }

                        ProfileDetails.appendChild(ProfileDetailsH4_2);
                        ProfileDetails.appendChild(ProfileInfoH4_2);
                        ProfileDetails.appendChild(ProfileDetailsH4_3);
                        ProfileDetails.appendChild(ProfileInfoH4_3);
                        ProfileDetails.appendChild(ProfileDetailsH4_4);
                        ProfileDetails.appendChild(ProfileInfoH4_4);
                        ProfileDetails.appendChild(ProfileDetailsH4_5);
                        ProfileDetails.appendChild(ProfileInfoH4_5);
                        ProfileDetails.appendChild(ProfileDetailsH4_6);
                        ProfileDetails.appendChild(ProfileInfoH4_6);
                        if (data[i].website_url !== null) {
                            ProfileDetails.appendChild(ProfileDetailsH4_7);
                            ProfileDetails.appendChild(ProfileInfoH4_7);
                        }
                        tradespersonListingsDiv.appendChild(ProfileDetails);
                        tradespersonListings.appendChild(tradespersonListingsDiv);
                    }
                }
            }
        };
        req.open("GET", url, true);
        req.send();
}

function showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counterUser, markerGroup4, markerGroupBuilder, markerGroupCarpenter, markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler) {
    var req = new XMLHttpRequest();
    var url = '/getAllTradespeople';
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);
                var dataLength = data.length - 1;
                var LatestLength = dataLength - 4;
                var RelatedListings = document.getElementById('RelatedListings');
                RelatedListings.innerHTML = "";
                var LatestListingsContainer = document.getElementById('RelatedListingsContainer');
                LatestListingsContainer.style.display= 'block';
                var counter = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].occupation === occupation && counter < 4) {
                        counter++;
                        var related_listings = document.getElementById('RelatedListings');
                        var related_listings_image_div = document.createElement('DIV');
                        related_listings_image_div.setAttribute("class", "col-md-3 col-sm-6");
                        related_listings_image_div.setAttribute("id", "RelatedListingsDiv");

                        if (counterUser === 1) {
                            var imageDiv = document.createElement('DIV');
                            var favDiv = document.createElement('DIV');
                            favDiv.classList.add("favDiv");
                            var i_element = document.createElement('I');
                            i_element.classList.add("i_element");
                            var span = document.createElement('SPAN');
                            span.classList.add("span");
                            span.innerHTML = 'Button';
                            imageDiv.classList.add("container");
                            imageDiv.setAttribute("id", "PremiumListingsImage");
                            if (data[i].image !== null) {
                                var imagePic = document.createElement('IMG');
                                imagePic.classList.add("PremiumListings1");
                                imagePic.src = data[i].image;
                            }
                            favDiv.appendChild(i_element);
                            favDiv.appendChild(span);
                            imageDiv.appendChild(imagePic);
                            imageDiv.appendChild(favDiv);
                            i_element.addEventListener("click", function () {
                                $(this).toggleClass("press", 1000);
                                const values = [data[i].firstname, data[i].lastname, data[i].email, data[i].phone_no,
                                data[i].company_name, data[i].occupation, data[i].town, data[i].county, data[i].image];
                                $.ajax({
                                    type: "POST",
                                    url: "/edit_favorites/",
                                    data: {'tradesperson': values},
                                    traditional: true,
                                    dataType: 'html',
                                    success: function () {
                                    $('#message').html("<h2>Favourite Submitted!</h2>")
                                    }
                                });
                            });
                        }
                        else {
                            var imageDiv = document.createElement('DIV');
                            imageDiv.classList.add("container");
                            if (data[i].image !== null) {
                            var imagePic = document.createElement('IMG');
                            imagePic.classList.add("PremiumListings1");
                            imagePic.src = data[i].image;
                            }
                            imageDiv.appendChild(imagePic);
                        }


                        var related_listings_details = document.createElement('DIV');
                        var preium_listings_image_div_outer = document.createElement('DIV');
                        related_listings_details.classList.add("RelatedDetails");
                        preium_listings_image_div_outer.classList.add("container");
                        preium_listings_image_div_outer.setAttribute("id", "PremiumDetailsInner");
                        var related_listings_h3 = document.createElement('H3');
                        related_listings_h3.classList.add("service-heading");
                        related_listings_h3.innerHTML = data[i].company_name;
                        related_listings_h3.setAttribute("id", "RelatedListingsName");

                        var bold = document.createElement("b");
                        bold.appendChild(document.createTextNode(" Name: "));
                        var ProfileDetailsH4 = document.createElement('P');
                        ProfileDetailsH4.className += "col-md-5 col-5";
                        ProfileDetailsH4.setAttribute("id", "floatLeft");
                        ProfileDetailsH4.appendChild(bold);

                        var ProfileInfoH4 = document.createElement('P');
                        ProfileInfoH4.setAttribute("class", "col-md-7 col-7");
                        ProfileInfoH4.setAttribute("id", "floatRight");
                        let newText = document.createTextNode(data[i].firstname + " " + data[i].lastname);
                        ProfileInfoH4.appendChild(newText);

                        var bold2 = document.createElement("b");
                        bold2.appendChild(document.createTextNode(" Occupation: "));
                        var ProfileDetailsH4_2 = document.createElement('P');
                        ProfileDetailsH4_2.className += "col-md-5 col-5";
                        ProfileDetailsH4_2.setAttribute("id", "floatLeft");
                        ProfileDetailsH4_2.appendChild(bold2);

                        var ProfileInfoH4_2 = document.createElement('P');
                        ProfileInfoH4_2.setAttribute("class", "col-md-7 col-7");
                        ProfileInfoH4_2.setAttribute("id", "floatRight");
                        let newText2 = document.createTextNode(data[i].occupation);
                        ProfileInfoH4_2.appendChild(newText2);

                        var bold3 = document.createElement("b");
                        bold3.appendChild(document.createTextNode(" Town: "));
                        var ProfileDetailsH4_3 = document.createElement('P');
                        ProfileDetailsH4_3.className += "col-md-5 col-5";
                        ProfileDetailsH4_3.setAttribute("id", "floatLeft");
                        ProfileDetailsH4_3.appendChild(bold3);

                        var ProfileInfoH4_3 = document.createElement('P');
                        ProfileInfoH4_3.setAttribute("class", "col-md-7 col-7");
                        ProfileInfoH4_3.setAttribute("id", "floatRight");
                        let newText3 = document.createTextNode(data[i].town);
                        ProfileInfoH4_3.appendChild(newText3);

                        var bold4 = document.createElement("b");
                        bold4.appendChild(document.createTextNode(" County: "));
                        var ProfileDetailsH4_4 = document.createElement('P');
                        ProfileDetailsH4_4.className += "col-md-5 col-5";
                        ProfileDetailsH4_4.setAttribute("id", "floatLeft");
                        ProfileDetailsH4_4.appendChild(bold4);

                        var ProfileInfoH4_4 = document.createElement('P');
                        ProfileInfoH4_4.setAttribute("class", "col-md-7 col-7");
                        ProfileInfoH4_4.setAttribute("id", "floatRight");
                        let newText4 = document.createTextNode(data[i].county);
                        ProfileInfoH4_4.appendChild(newText4);

                        var related_listings_h4_5 = document.createElement('P');
                        related_listings_h4_5.classList.add("col-md-12");
                        related_listings_h4_5.setAttribute("id", "PortfolioLink");
                        related_listings_h4_5.innerHTML = "View my Porfolio!";
                        related_listings_h4_5.href = "#body";
                        related_listings_h4_5.addEventListener("click", function() {
                            var username = data[i].username;
                            var occupation = data[i].occupation;
                            viewTradesperson(username, counterUser);
                            viewPortfolio(username);
                            showAllRelatedTradespeople(occupation, map, markerGroup, markerGroup1, markerGroup2, counterUser, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                            showTradespersonOnly(data[i], map, markerGroup, markerGroup1, markerGroup2, markerGroup4, markerGroupBuilder, markerGroupCarpenter,
                                markerGroupEngineer, markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler);
                        });


                        if (data[i].image !== null) {
                            preium_listings_image_div_outer.appendChild(imageDiv);
                        }
                        related_listings_details.appendChild(related_listings_h3);
                        related_listings_details.appendChild(ProfileDetailsH4);
                        related_listings_details.appendChild(ProfileInfoH4);
                        related_listings_details.appendChild(ProfileDetailsH4_2);
                        related_listings_details.appendChild(ProfileInfoH4_2);
                        related_listings_details.appendChild(ProfileDetailsH4_3);
                        related_listings_details.appendChild(ProfileInfoH4_3);
                        related_listings_details.appendChild(ProfileDetailsH4_4);
                        related_listings_details.appendChild(ProfileInfoH4_4);
                        related_listings_details.appendChild(related_listings_h4_5);
                        preium_listings_image_div_outer.appendChild(related_listings_details);
                        related_listings_image_div.appendChild(preium_listings_image_div_outer);
                        related_listings.appendChild(related_listings_image_div);
                    }
                }
            }
        };
        req.open("GET", url, true);
        req.send();
}

function removeFavourite(firstname, lastname) {
    //AJAX Implementation
    $(this).toggleClass("press", 1000);
    const values = [firstname, lastname];
    $.ajax({
        type: "POST",
        url: "/remove_favorite/",
        data: {'remove_tradesperson': values},
        traditional: true,
        dataType: 'html',
        success: function (msg) {
            window.location.reload();
            console.log(msg);
        }
    });
}


function checkUser(username, checkModal) {
    var checkUser = 0;
    var req = new XMLHttpRequest();
    var url = '/getAllTradespeople';
        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = eval(req.responseText);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].username === username) {
                        checkUser = 1;
                    }
                }
                if (checkUser === 1) {
                    document.getElementById('myprofile2').style.display = 'none';
                    document.getElementById('myprofile2.1').style.display = 'none';
                    // Get the modal
                    if (checkModal === 1) {
                        var modal = document.getElementById("myModal");
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];
                        var a = document.getElementsByClassName("closeAHref")[0];
                        modal.style.display = "block";
                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function () {
                            modal.style.display = "none";
                        }
                        a.onclick = function () {
                            modal.style.display = "none";
                        }
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function (event) {
                            if (event.target === modal) {
                                modal.style.display = "none";
                            }
                        }
                    }
                }
                else {
                    document.getElementById('myprofile').style.display = 'none';
                    document.getElementById('myprofile0.1').style.display = 'none';
                    document.getElementById('myprofile1').style.display = 'none';
                    document.getElementById('myprofile1.1').style.display = 'none';
                }
            }
        };
        req.open("GET", url, true);
        req.send();
}


function updateTradespersonLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const values = [position.coords.latitude, position.coords.longitude];
        $.ajax({
            type: "POST",
            url: "/update_location/",
            dataType : 'json',
            data: JSON.stringify({'data': values}),
            traditional: true,
            success: function () {
                $('#message').html("<h2>Update Location!</h2>")
            }
        });
    },
    function(error) {
    if (error.code === error.PERMISSION_DENIED)
        console.log("Location permissions denied");
    });
}

function addFavourite(i_element, firstname, lastname, email, phone_no, company_name, occupation, town, county, image) {
    i_element.toggleClass("press", 1000);
    console.log('Adding Favourite');
     const values = [firstname, lastname, email, phone_no, company_name, occupation, town, county, image];
     $.ajax({
         type: "POST",
         url: "/edit_favorites/",
         data: {'tradesperson': values},
         traditional: true,
         dataType: 'html',
         success: function () {
             $('#message').html("<h2>Favourite Submitted!</h2>")
         }
     });
}