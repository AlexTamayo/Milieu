'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the business branding data
    const businessBrandingData = [
      {
        logoUrl: 'https://static.vecteezy.com/system/resources/previews/003/016/264/large_2x/colorful-sushi-icon-ilustration-free-vector.jpg',
        bannerUrl: 'https://th.bing.com/th/id/R.70e894a9ef389bdd04250d7e552cbdb3?rik=pUvKGMV38lryEQ&pid=ImgRaw&r=0',
        pinUrl: 'https://static.vecteezy.com/system/resources/previews/003/016/264/large_2x/colorful-sushi-icon-ilustration-free-vector.jpg',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'logo.jpg',
        bannerUrl: 'banner.jpg',
        pinUrl: 'pin.jpg',
        businessId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffishing-gear.html&psig=AOvVaw2FzmDnfh9_dQta1dmdZ_PO&ust=1694485791720000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjhwOfOwaGBAxVNGDQIHXBfB5QQjRx6BAgAEAw',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffatnancystackle.com%2Fcdn%2Fshop%2Ft%2F31%2Fassets%2Fsmush-tackle-shop-interior_1.jpg%3Fv%3D103339609360751803541510855517&tbnid=Tv6rSR5amwZh6M&vet=12ahUKEwiJgcfiwaGBAxV6GTQIHZocDQwQMygJegQIARBh..i&imgrefurl=https%3A%2F%2Ffatnancystackle.com%2F&docid=qE_7oJqIRVqNPM&w=579&h=386&q=fishing%20shop%20inside%20apparel%20&ved=2ahUKEwiJgcfiwaGBAxV6GTQIHZocDQwQMygJegQIARBh',
        pinUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Ffishing-gear.html&psig=AOvVaw2FzmDnfh9_dQta1dmdZ_PO&ust=1694485791720000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjhwOfOwaGBAxVNGDQIHXBfB5QQjRx6BAgAEAw',
        businessId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fmath-tutoring-education-logo-design-template_76712-699.jpg%3Fw%3D2000&tbnid=8NXga8IvQi2RvM&vet=12ahUKEwig4_jRw6GBAxUiHDQIHf7aCNkQMygAegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fmath-tutoring-education-logo-design-template_45258264.htm&docid=quXxFROZ-Jix8M&w=2000&h=1556&q=math%20tutoring%20logo&ved=2ahUKEwig4_jRw6GBAxUiHDQIHf7aCNkQMygAegQIARB1',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.evokelearning.ca%2Fwp-content%2Fuploads%2F2022%2F01%2FMath-Tutoring-shutterstock_1457173616.jpg&tbnid=12ise4Jqx9U_rM&vet=12ahUKEwiU4JzDw6GBAxWbNzQIHQESD8UQMygKegUIARCJAQ..i&imgrefurl=https%3A%2F%2Fwww.evokelearning.ca%2Ftutoring%2Fhigh-dosage-math-tutoring-program%2F&docid=DsCwokbBbz2WnM&w=2000&h=729&q=math%20tutoring&ved=2ahUKEwiU4JzDw6GBAxWbNzQIHQESD8UQMygKegUIARCJAQ',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fmath-tutoring-education-logo-design-template_76712-699.jpg%3Fw%3D2000&tbnid=8NXga8IvQi2RvM&vet=12ahUKEwig4_jRw6GBAxUiHDQIHf7aCNkQMygAegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fmath-tutoring-education-logo-design-template_45258264.htm&docid=quXxFROZ-Jix8M&w=2000&h=1556&q=math%20tutoring%20logo&ved=2ahUKEwig4_jRw6GBAxUiHDQIHf7aCNkQMygAegQIARB1',
        businessId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vectorstock.com%2Fi%2Fpreview-1x%2F25%2F92%2Fsimple-chiropractic-logo-silhouette-actve-vector-28012592.jpg&tbnid=BNkEuZwS9e5onM&vet=12ahUKEwi-3uiGxqGBAxU8OTQIHR3QCv0QMygRegQIARB-..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fchiropractic-physiotherapy-logo-design-creative-vector-28012660&docid=yrr8wHXph_PFYM&w=250&h=250&q=massage%20therapy%20chiropractc%20logo&ved=2ahUKEwi-3uiGxqGBAxU8OTQIHR3QCv0QMygRegQIARB-',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffitnesschiropractic.net%2Fwp-content%2Fuploads%2F2018%2F06%2Fchiropractic-adjustment.jpg&tbnid=2ATXXYXpfeT2VM&vet=12ahUKEwi_t9T7xaGBAxUPMjQIHYaLCuQQMygHegQIARBm..i&imgrefurl=https%3A%2F%2Ffitnesschiropractic.net%2Fmassage-therapy%2Fchiropractic-massage-therapy%2F&docid=Vr-thwsE0bcgiM&w=870&h=347&q=massage%20therapy%20chiropractc&ved=2ahUKEwi_t9T7xaGBAxUPMjQIHYaLCuQQMygHegQIARBm',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vectorstock.com%2Fi%2Fpreview-1x%2F25%2F92%2Fsimple-chiropractic-logo-silhouette-actve-vector-28012592.jpg&tbnid=BNkEuZwS9e5onM&vet=12ahUKEwi-3uiGxqGBAxU8OTQIHR3QCv0QMygRegQIARB-..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fchiropractic-physiotherapy-logo-design-creative-vector-28012660&docid=yrr8wHXph_PFYM&w=250&h=250&q=massage%20therapy%20chiropractc%20logo&ved=2ahUKEwi-3uiGxqGBAxU8OTQIHR3QCv0QMygRegQIARB-',
        businessId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F02%2F89%2F62%2F48%2F360_F_289624809_wfrnonE25K3emSX9TEJa1GNFmAOiWyRJ.jpg&tbnid=CQ7OJDpl5o0awM&vet=12ahUKEwitt5-SyqGBAxUKGzQIHWqrBZYQMygEegQIARB1..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dproperty%2Bmaintenance%2Blogo&docid=2wJq1aJ7hymVhM&w=360&h=360&q=property%20maintenance%20photos%20logo&ved=2ahUKEwitt5-SyqGBAxUKGzQIHWqrBZYQMygEegQIARB1',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.simple-solutions.ca%2Fwp-content%2Fuploads%2F2022%2F03%2Fwhat-does-landscape-maintenance-for-a-property-include-f.jpg&tbnid=tVp8S8oL9tH0yM&vet=12ahUKEwimh-SCyqGBAxXOMDQIHazyDOsQMygNegUIARCXAQ..i&imgrefurl=https%3A%2F%2Fwww.simple-solutions.ca%2Fblog%2Fwhat-does-landscape-maintenance-for-a-property-include%2F&docid=ZQpwG7S077NPFM&w=800&h=344&q=property%20maintenance%20photos&ved=2ahUKEwimh-SCyqGBAxXOMDQIHazyDOsQMygNegUIARCXAQ',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F02%2F89%2F62%2F48%2F360_F_289624809_wfrnonE25K3emSX9TEJa1GNFmAOiWyRJ.jpg&tbnid=CQ7OJDpl5o0awM&vet=12ahUKEwitt5-SyqGBAxUKGzQIHWqrBZYQMygEegQIARB1..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dproperty%2Bmaintenance%2Blogo&docid=2wJq1aJ7hymVhM&w=360&h=360&q=property%20maintenance%20photos%20logo&ved=2ahUKEwitt5-SyqGBAxUKGzQIHWqrBZYQMygEegQIARB1',
        businessId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Findian-cuisine-spices-icon-with-culinary-seasoning_8071-9904.jpg%3Fw%3D2000&tbnid=F8y0anB298YlFM&vet=12ahUKEwjmirai1KGBAxVJJzQIHdeTA24QMygGegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Findian-food-logo&docid=StuntpRqbcMVxM&w=2000&h=2000&q=indian%20restaurant%20logo&ved=2ahUKEwjmirai1KGBAxVJJzQIHdeTA24QMygGegUIARCEAQ',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftamarindcalgary.ca%2Fwp-content%2Fuploads%2F2018%2F04%2FTamarind-Food-photo.jpg&tbnid=YKIa2q5BuXRsTM&vet=12ahUKEwjBk-D006GBAxWzMDQIHaMtD3YQMygHegUIARCDAQ..i&imgrefurl=https%3A%2F%2Ftamarindcalgary.ca%2F&docid=I52OX1T_LSjVFM&w=1024&h=682&q=indian%20restaurant%20&ved=2ahUKEwjBk-D006GBAxWzMDQIHaMtD3YQMygHegUIARCDAQ',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Findian-cuisine-spices-icon-with-culinary-seasoning_8071-9904.jpg%3Fw%3D2000&tbnid=F8y0anB298YlFM&vet=12ahUKEwjmirai1KGBAxVJJzQIHdeTA24QMygGegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Findian-food-logo&docid=StuntpRqbcMVxM&w=2000&h=2000&q=indian%20restaurant%20logo&ved=2ahUKEwjmirai1KGBAxVJJzQIHdeTA24QMygGegUIARCEAQ',
        businessId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063526393461&tbnid=XXhB97EpU6r_DM&vet=12ahUKEwjS1_u21KGBAxXXODQIHQ7_BUUQMygdegUIARCdAQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FSpicymexico%2F&docid=3TnWifx-u_9NMM&w=1977&h=1977&q=spicy%20mexican%20restaurant&ved=2ahUKEwjS1_u21KGBAxXXODQIHQ7_BUUQMygdegUIARCdAQ',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.delicious.com.au%2FcCXjcJNs%2Fdel%2F2022%2F10%2Fp79-taco-rice-177057-1.png&tbnid=O_dxwapDLdTMoM&vet=12ahUKEwjS1_u21KGBAxXXODQIHQ7_BUUQMygjegUIARCqAQ..i&imgrefurl=https%3A%2F%2Fwww.delicious.com.au%2Frecipes%2Fcollections%2Fgallery%2F40-mexican-recipes-for-your-weekend-fiesta%2F6k3n6ehf&docid=e_mPCX2HZxbvYM&w=1500&h=1000&q=spicy%20mexican%20restaurant&ved=2ahUKEwjS1_u21KGBAxXXODQIHQ7_BUUQMygjegUIARCqAQ',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063526393461&tbnid=XXhB97EpU6r_DM&vet=12ahUKEwjS1_u21KGBAxXXODQIHQ7_BUUQMygdegUIARCdAQ..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FSpicymexico%2F&docid=3TnWifx-u_9NMM&w=1977&h=1977&q=spicy%20mexican%20restaurant&ved=2ahUKEwjS1_u21KGBAxXXODQIHQ7_BUUQMygdegUIARCdAQ',
        businessId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fmaximkostenko%2Fmaximkostenko1605%2Fmaximkostenko160500070%2F56651182-auto-center-garage-service-and-repair-logo-vector-template.jpg&tbnid=v-gSPfwYxAGUzM&vet=12ahUKEwi5v8GG1aGBAxX1FjQIHa8ODyAQMygMegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_56651182_auto-center-garage-service-and-repair-logo-vector-template.html&docid=ADTCwGQ2KLOPcM&w=1300&h=912&q=car%20maintenance%20garage%20photos%20logo&ved=2ahUKEwi5v8GG1aGBAxX1FjQIHa8ODyAQMygMegQIARBv',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0e%2F50%2Fc2%2F0e50c2395ce120082508aa6ac80ef16b.jpg&tbnid=38Ztppi632D0uM&vet=12ahUKEwi77vL11KGBAxXUAjQIHaa2DCoQMygGegQIARBm..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F485544403567534722%2F&docid=6K7GCkhwGs59GM&w=3500&h=2334&q=car%20maintenance%20garage%20photos&ved=2ahUKEwi77vL11KGBAxXUAjQIHaa2DCoQMygGegQIARBm',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fmaximkostenko%2Fmaximkostenko1605%2Fmaximkostenko160500070%2F56651182-auto-center-garage-service-and-repair-logo-vector-template.jpg&tbnid=v-gSPfwYxAGUzM&vet=12ahUKEwi5v8GG1aGBAxX1FjQIHa8ODyAQMygMegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_56651182_auto-center-garage-service-and-repair-logo-vector-template.html&docid=ADTCwGQ2KLOPcM&w=1300&h=912&q=car%20maintenance%20garage%20photos%20logo&ved=2ahUKEwi5v8GG1aGBAxX1FjQIHa8ODyAQMygMegQIARBv',
        businessId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn5.vectorstock.com%2Fi%2F1000x1000%2F78%2F09%2Fhome-repair-logo-template-with-handyman-tools-vector-29447809.jpg&tbnid=QCE_K7sOF4zSiM&vet=12ahUKEwiLjNa_1aGBAxX7FjQIHbSICxQQMygTegUIARCFAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fhome-repair-logo-template-with-handyman-tools-vector-29447809&docid=p3ECI8NQMXBWcM&w=1000&h=1080&q=handyman%20photos%20house%20logo&ved=2ahUKEwiLjNa_1aGBAxX7FjQIHbSICxQQMygTegUIARCFAQ',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1249611%2Fpexels-photo-1249611.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-bidvine-1249611.jpg%26fm%3Djpg&tbnid=a7KXuM17_SvNWM&vet=12ahUKEwim0-qe1aGBAxWNHjQIHYkdBD0QMyg0egUIARDXAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhandyman%2F&docid=uVnefsJtilcuHM&w=3600&h=2400&q=handyman%20photos%20house&ved=2ahUKEwim0-qe1aGBAxWNHjQIHYkdBD0QMyg0egUIARDXAQ',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn5.vectorstock.com%2Fi%2F1000x1000%2F78%2F09%2Fhome-repair-logo-template-with-handyman-tools-vector-29447809.jpg&tbnid=QCE_K7sOF4zSiM&vet=12ahUKEwiLjNa_1aGBAxX7FjQIHbSICxQQMygTegUIARCFAQ..i&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fhome-repair-logo-template-with-handyman-tools-vector-29447809&docid=p3ECI8NQMXBWcM&w=1000&h=1080&q=handyman%20photos%20house%20logo&ved=2ahUKEwiLjNa_1aGBAxX7FjQIHbSICxQQMygTegUIARCFAQ',
        businessId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fsnow-removal-logo-design-snowplow-service-frost-icon-symbol_171487-1887.jpg%3Fw%3D2000&tbnid=S4gYXwaHLxx7TM&vet=12ahUKEwiqrK781aGBAxUhMn0KHaTJAjEQMygCegQIARBd..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fsnow-removal-logo-design-snowplow-service-frost-icon-symbol_51106283.htm&docid=d_LjGLbzQd1ixM&w=2000&h=1333&q=Snow-Removal%20logo&ved=2ahUKEwiqrK781aGBAxUhMn0KHaTJAjEQMygCegQIARBd',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fedenapp.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fsnow-removal-burlington-service.jpg&tbnid=LwWAlv-4qyz6BM&vet=12ahUKEwjX_sfg1aGBAxVYMjQIHUBCCtcQMygDegQIARB8..i&imgrefurl=https%3A%2F%2Fedenapp.com%2Fblog%2Fgoing-on-vacation-options-for-snow-removal%2F&docid=hJBhYBsjpNZbBM&w=408&h=245&q=Snow-Removal%20photo&ved=2ahUKEwjX_sfg1aGBAxVYMjQIHUBCCtcQMygDegQIARB8',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fsnow-removal-logo-design-snowplow-service-frost-icon-symbol_171487-1887.jpg%3Fw%3D2000&tbnid=S4gYXwaHLxx7TM&vet=12ahUKEwiqrK781aGBAxUhMn0KHaTJAjEQMygCegQIARBd..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fsnow-removal-logo-design-snowplow-service-frost-icon-symbol_51106283.htm&docid=d_LjGLbzQd1ixM&w=2000&h=1333&q=Snow-Removal%20logo&ved=2ahUKEwiqrK781aGBAxUhMn0KHaTJAjEQMygCegQIARBd',
        businessId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-platform.99static.com%2FBvFXiAbT58-az3Y5X3CUe0SdxNI%3D%2F500x500%2Ftop%2Fsmart%2F99designs-contests-attachments%2F38%2F38686%2Fattachment_38686382&tbnid=A8en8hHDqroeTM&vet=12ahUKEwiFt9uo1qGBAxUGJzQIHanzDlcQMygMegUIARCNAQ..i&imgrefurl=https%3A%2F%2F99designs.com%2Flogo-design%2Fcontests%2Fcreate-eye-catching-childcare-logo-tiny-toes-academy-370294&docid=A_F57EQ-DxkwOM&w=500&h=500&q=tiny%20toes%20daycare%20logo&ved=2ahUKEwiFt9uo1qGBAxUGJzQIHanzDlcQMygMegUIARCNAQ',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fphoto.weecare.co%2Fpublic%2Fphotos%2Fpath%2Fedc80a.jpg%3Fwidth%3D800%26height%3D500&tbnid=t31xobQ1bVMeuM&vet=12ahUKEwjX05iX1qGBAxUdOTQIHVeNDWwQMygNegQIARBs..i&imgrefurl=https%3A%2F%2Fweecare.co%2Fdaycare%2Flane-family-child-care&docid=-PkTz8ySwyjljM&w=375&h=500&q=tiny%20toes%20daycare%20photos&ved=2ahUKEwjX05iX1qGBAxUdOTQIHVeNDWwQMygNegQIARBs',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-platform.99static.com%2FBvFXiAbT58-az3Y5X3CUe0SdxNI%3D%2F500x500%2Ftop%2Fsmart%2F99designs-contests-attachments%2F38%2F38686%2Fattachment_38686382&tbnid=A8en8hHDqroeTM&vet=12ahUKEwiFt9uo1qGBAxUGJzQIHanzDlcQMygMegUIARCNAQ..i&imgrefurl=https%3A%2F%2F99designs.com%2Flogo-design%2Fcontests%2Fcreate-eye-catching-childcare-logo-tiny-toes-academy-370294&docid=A_F57EQ-DxkwOM&w=500&h=500&q=tiny%20toes%20daycare%20logo&ved=2ahUKEwiFt9uo1qGBAxUGJzQIHanzDlcQMygMegUIARCNAQ',
        businessId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert the business branding data into the database
    await queryInterface.bulkInsert('BusinessBrandings', businessBrandingData, {});

    // You should replace the business IDs with the actual IDs of the businesses you want to associate with the branding.
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the business branding data if needed
    await queryInterface.bulkDelete('BusinessBrandings', null, {});
  },
};

