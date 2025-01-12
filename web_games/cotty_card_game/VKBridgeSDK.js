// Работа с VK Bridge SDK в старых играх GKProduction v1.0
"use strict";

// ================ Начало ================
// Инициализация SDK
function VKGInit() {
    bridge.send('VKWebAppInit')
    .then((data) => {
        if (data.result) {
            // Приложение инициализировано
            console.log('🟦Init complete');
            info_event = "VKG: Init complete";
        } else {
            // Ошибка
            console.log('🟦Init error ', error);
            info_event = "VKG: Init error";
        }
    })
    .catch((error) => {
        // Ошибка
        console.log('🟦Init error ', error);
        info_event = "VKG: Init error";
    });
}

// ================ Реклама ================
// Показать баннер
function VKGShowBannerAd() {
    bridge.send('VKWebAppShowBannerAd', {
        banner_location: 'top'
    })
    .then((data) => {
        if (data.result) {
            // Баннерная реклама отобразилась
            console.log('🟦Banner is shown');
            info_event = "VKG: Banner is shown";
        }
    })
    .catch((error) => {
        // Ошибка
        console.log('🟦VKG: Show banner error: ', error);
        info_event = "VKG: Show banner error";
    });
}

// Скрыть баннер
function VKGHideBannerAd() {
    bridge.send('VKWebAppHideBannerAd')
    .then((data) => {
        if (data.result) {
            // Баннерная реклама скрыта
            console.log('🟦Banner is hidden');
            info_event = "VKG: Banner is hidden";
        }
    })
    .catch((error) => {
        // Ошибка
        console.log('🟦VKG: Hide banner error: ', error);
        info_event = "VKG: Hide banner error";
    });
}

// Загрузить полноэкранную рекламу
function VKGLoadNativeAd(type) {
    // type="interstitial" (Межстраничная)
    // type="reward" (Видео)
    bridge.send('VKWebAppCheckNativeAds', {
        ad_format: type /* Тип рекламы */
    })
    .then((data) => {
        if (data.result) {
            // Предзагруженные материалы есть
            console.log('🟦', type, ' ad is loaded');
            if (type === ('interstitial')) {
                info_event = "VKG: Fullscreen Ad is loaded";
            }
            if (type === ('reward')) {
                info_event = "VKG: Video Ad is loaded";
            }
        } else {
            // Материалов нет
            console.log('🟦VKG: No ads');
            info_event = "VKG: No ads";
        }
    })
    .catch((error) => {
        // Ошибка
        console.log('🟦VKG: Load ', type, ' ad error: ', error);
        if (type === ('interstitial')) {
            info_event = "VKG: Fullscreen Ad is not loaded";
        }
        if (type === ('reward')) {
            info_event = "VKG: Video Ad is not loaded";
        }
    });
}

// Показать полноэкранную рекламу
function VKGShowNativeAd(type) {
    // type="interstitial" (Межстраничная)
    // type="reward" (Видео)
    bridge.send('VKWebAppShowNativeAds', {
        ad_format: type /* Тип рекламы */
    })
    .then((data) => {
        if (data.result) {
            // Реклама была показана
            console.log('🟦', type, ' ad is showing');
            if (type === ('interstitial')) {
                info_event = "VKG: Fullscreen Ad is showing";
            }
            if (type === ('reward')) {
                info_event = "VKG: Video Ad is showing";
            }
        } else {
            // Ошибка
            console.log('🟦VKG: Show ', type, ' ad error: ', error);
            if (type === ('interstitial')) {
                info_event = "VKG: Fullscreen Ad is not showing";
            }
            if (type === ('reward')) {
                info_event = "VKG: Video Ad is not showing";
            }
        }
    })
    .catch((error) => {
        // Ошибка
        console.log('🟦VKG: Show ', type, ' ad error: ', error);
        if (type === ('interstitial')) {
            info_event = "VKG: Fullscreen Ad is not showing";
        }
        if (type === ('reward')) {
            info_event = "VKG: Video Ad is not showing";
        }
    });
}
