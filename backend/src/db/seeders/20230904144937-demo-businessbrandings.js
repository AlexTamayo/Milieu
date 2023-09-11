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
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F937227354%2Fvector%2Fhairdressing-scissors-and-curl-hair.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DvzyYRkWAgyZ9Q-elEeJK0zVWe9LDseFSqaVkOr1MsDE%3D&tbnid=n_4rqR3tLPOESM&vet=12ahUKEwjp_v_p6qGBAxWMJDQIHUIcAvUQMyhVegUIARC3Ag..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fhair-salon-logo&docid=QHK6Vb9hpoPixM&w=612&h=612&q=beauty%20salon%20photos%20hari%20styling%20logo&ved=2ahUKEwjp_v_p6qGBAxWMJDQIHUIcAvUQMyhVegUIARC3Ag',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fbooksy.com%2Fl%2Fwp-content%2Fuploads%2F2022%2F01%2F2274-e1641986301391-995x777.jpg&tbnid=4xOVYJlUFRn7PM&vet=12ahUKEwiTyefI6qGBAxUNHzQIHVyGAFYQMygTegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fbooksy.com%2Fl%2Fbeauty-salons%2F&docid=sTICFaLesCmg0M&w=995&h=777&q=beauty%20salon%20photos%20hari%20styling&ved=2ahUKEwiTyefI6qGBAxUNHzQIHVyGAFYQMygTegUIARCEAQ',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F937227354%2Fvector%2Fhairdressing-scissors-and-curl-hair.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DvzyYRkWAgyZ9Q-elEeJK0zVWe9LDseFSqaVkOr1MsDE%3D&tbnid=n_4rqR3tLPOESM&vet=12ahUKEwjp_v_p6qGBAxWMJDQIHUIcAvUQMyhVegUIARC3Ag..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fhair-salon-logo&docid=QHK6Vb9hpoPixM&w=612&h=612&q=beauty%20salon%20photos%20hari%20styling%20logo&ved=2ahUKEwjp_v_p6qGBAxWMJDQIHUIcAvUQMyhVegUIARC3Ag',
        businessId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F01%2F10%2F67%2F25%2F1000_F_110672599_FIqLh9pHyGHa1UwdNSaZtVLHBHuRRfIW.jpg&tbnid=FrOByaEZ78DYoM&vet=12ahUKEwiRnKfM66GBAxXkJTQIHYFGCfUQMygGegQIARBd..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fpet-grooming-logo%2F110672599&docid=4Nfe1t2XVRC3hM&w=1000&h=1000&q=Professional%20cat%20groomer%20logo&ved=2ahUKEwiRnKfM66GBAxXkJTQIHYFGCfUQMygGegQIARBd',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.groomit.me%2Fwp-content%2Fuploads%2F2019%2F01%2Fcat.png&tbnid=XoT7VdVjRxY2pM&vet=12ahUKEwjz8K6066GBAxWmHjQIHS4BBwsQMygCegQIARBb..i&imgrefurl=https%3A%2F%2Fblog.groomit.me%2F2019%2F01%2F17%2Fprofessional-cat-grooming-what-you-need-to-know%2F&docid=8_NhkxH74zdhrM&w=770&h=513&q=Professional%20cat%20groomer%20photos&ved=2ahUKEwjz8K6066GBAxWmHjQIHS4BBwsQMygCegQIARBb',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F01%2F10%2F67%2F25%2F1000_F_110672599_FIqLh9pHyGHa1UwdNSaZtVLHBHuRRfIW.jpg&tbnid=FrOByaEZ78DYoM&vet=12ahUKEwiRnKfM66GBAxXkJTQIHYFGCfUQMygGegQIARBd..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fpet-grooming-logo%2F110672599&docid=4Nfe1t2XVRC3hM&w=1000&h=1000&q=Professional%20cat%20groomer%20logo&ved=2ahUKEwiRnKfM66GBAxXkJTQIHYFGCfUQMygGegQIARBd',
        businessId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbook-store-logo-template-lettering-composition-93137507.jpg&tbnid=WncpMy8YiZrUxM&vet=12ahUKEwjSq-Gj7KGBAxU_MjQIHQItC5kQMygVegUIARCqAQ..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fbook-store.html&docid=Y2fIPV9HhQJwHM&w=800&h=800&q=book%20storelogo&ved=2ahUKEwjSq-Gj7KGBAxU_MjQIHQItC5kQMygVegUIARCqAQ',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100869226170157&tbnid=vGY-q0wWU7ycZM&vet=12ahUKEwit7e3n66GBAxWvMDQIHcQKAaIQMygAegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fpleasantpheasantbooks%2F&docid=l4QvwQy8rgcb_M&w=2048&h=1536&q=book%20store%20pleasant%20photos&ved=2ahUKEwit7e3n66GBAxWvMDQIHcQKAaIQMygAegQIARBV',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbook-store-logo-template-lettering-composition-93137507.jpg&tbnid=WncpMy8YiZrUxM&vet=12ahUKEwjSq-Gj7KGBAxU_MjQIHQItC5kQMygVegUIARCqAQ..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fbook-store.html&docid=Y2fIPV9HhQJwHM&w=800&h=800&q=book%20storelogo&ved=2ahUKEwjSq-Gj7KGBAxU_MjQIHQItC5kQMygVegUIARCqAQ',
        businessId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flogo.com%2Fimage-cdn%2Fimages%2Fkts928pd%2Fproduction%2F0b77d103610e6061efa637df67ad689a2abe4c2e-425x423.png%3Fw%3D1080%26q%3D72&tbnid=Exo6VUwJSHwsOM&vet=12ahUKEwimpaaE7aGBAxUbIzQIHe6HBQ4QMygpegUIARDRAQ..i&imgrefurl=https%3A%2F%2Flogo.com%2Flogos%2Fphotography&docid=z_9e03ofevCQwM&w=1080&h=1075&q=photography%20business%20logo&ved=2ahUKEwimpaaE7aGBAxUbIzQIHe6HBQ4QMygpegUIARDRAQ',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.nerdwallet.com%2Fassets%2Fblog%2Fwp-content%2Fuploads%2F2021%2F05%2FGettyImages-606353201.jpg&tbnid=bgfk4MfSM_N_xM&vet=12ahUKEwj1wsTh7KGBAxVQHzQIHSSLBjIQMygAegQIARB1..i&imgrefurl=https%3A%2F%2Fwww.nerdwallet.com%2Farticle%2Fsmall-business%2Fhow-to-start-a-photography-business&docid=zx7ChfOJ-YoGmM&w=2121&h=1414&q=photography%20business%20photo&ved=2ahUKEwj1wsTh7KGBAxVQHzQIHSSLBjIQMygAegQIARB1',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Flogo.com%2Fimage-cdn%2Fimages%2Fkts928pd%2Fproduction%2F0b77d103610e6061efa637df67ad689a2abe4c2e-425x423.png%3Fw%3D1080%26q%3D72&tbnid=Exo6VUwJSHwsOM&vet=12ahUKEwimpaaE7aGBAxUbIzQIHe6HBQ4QMygpegUIARDRAQ..i&imgrefurl=https%3A%2F%2Flogo.com%2Flogos%2Fphotography&docid=z_9e03ofevCQwM&w=1080&h=1075&q=photography%20business%20logo&ved=2ahUKEwimpaaE7aGBAxUbIzQIHe6HBQ4QMygpegUIARDRAQ',
        businessId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        logoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Felectric-repair-electrician-logo-design-concept-vector-icon-template-combination-safety-guard-shield-symbol-shock-199157128.jpg&tbnid=yUYBFIfNPjZwqM&vet=10CEIQMyiEAWoXChMIiKGNkO6hgQMVAAAAAB0AAAAAEAM..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Felectrician-logo.html&docid=95NTmAg6RiLrEM&w=800&h=800&q=electrician%20business%20logo&ved=0CEIQMyiEAWoXChMIiKGNkO6hgQMVAAAAAB0AAAAAEAM',
        bannerUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2zhlgis9acwvp.cloudfront.net%2Fimages%2Fuploaded%2Felectricians.jpg&tbnid=Pfw56rM6vlUIeM&vet=12ahUKEwjltrHI7aGBAxW8CTQIHQddDCYQMygDegQIARB7..i&imgrefurl=https%3A%2F%2Fstudentscholarships.org%2Fsalary%2F407%2Felectricians.php&docid=jTn2Aev8Ztf3EM&w=730&h=479&q=electrician%20business%20photo&ved=2ahUKEwjltrHI7aGBAxW8CTQIHQddDCYQMygDegQIARB7',
        pinUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Felectric-repair-electrician-logo-design-concept-vector-icon-template-combination-safety-guard-shield-symbol-shock-199157128.jpg&tbnid=yUYBFIfNPjZwqM&vet=10CEIQMyiEAWoXChMIiKGNkO6hgQMVAAAAAB0AAAAAEAM..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Felectrician-logo.html&docid=95NTmAg6RiLrEM&w=800&h=800&q=electrician%20business%20logo&ved=0CEIQMyiEAWoXChMIiKGNkO6hgQMVAAAAAB0AAAAAEAM',
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

