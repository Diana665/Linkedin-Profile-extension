import '../css/foundation-icons.css'

import $ from 'jquery'
import extensionHtml from '../templates/extension.html'

import App from './components/App'

const $profileActionsDiv = $('div.profile-actions.entity')
const $profileTopCardDiv = $('div.profile-top-card')
const $profileUrlSpan = $('span.public-profile-url')

 $(window).bind('load', () => {
    $profileTopCardDiv.append(extensionHtml);

    const profileUrl = $profileUrlSpan.text().trim()

    const app = new App({
        el: '#vue',
        data: () => {
            return { profileUrl, display: false }
        }
    });

    $profileActionsDiv
        .hide()
        .queue(() => {
            app.display = true;
        });
});
