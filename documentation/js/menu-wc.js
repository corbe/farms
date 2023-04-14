'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">serasa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AreasModule.html" data-type="entity-link" >AreasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' : 'data-target="#xs-controllers-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' :
                                            'id="xs-controllers-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' }>
                                            <li class="link">
                                                <a href="controllers/AreasController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AreasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' : 'data-target="#xs-injectables-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' :
                                        'id="xs-injectables-links-module-AreasModule-59b27b9d4eb820741f1b48b122b00f078501ed4c6a27029ee4798c381e22ba83626620058e1c186c21353da683906a6533ab853fbc673153940c00c685d5b3e7"' }>
                                        <li class="link">
                                            <a href="injectables/AreasService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AreasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' : 'data-target="#xs-controllers-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' :
                                            'id="xs-controllers-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' }>
                                            <li class="link">
                                                <a href="controllers/DashboardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' : 'data-target="#xs-injectables-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' :
                                        'id="xs-injectables-links-module-DashboardModule-cd0745604ad9b01ab558504fbd361f6ca2308f2e451a7a22f202333b757b727a87e874056346df96f96dd3d44fb4919a4b76277a8735915869a40c3ec66abf27"' }>
                                        <li class="link">
                                            <a href="injectables/DashboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FarmsModule.html" data-type="entity-link" >FarmsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' : 'data-target="#xs-controllers-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' :
                                            'id="xs-controllers-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' }>
                                            <li class="link">
                                                <a href="controllers/FarmsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' : 'data-target="#xs-injectables-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' :
                                        'id="xs-injectables-links-module-FarmsModule-0163cf19473b11779d35cc19ab6bfec96b142a58ac4f7c733376289ea220fe2e911ec26755ffc6b7665fd3e36ccf94a83502f1413d6241022722d0fcc0a6d2cb"' }>
                                        <li class="link">
                                            <a href="injectables/FarmsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FarmsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProducersModule.html" data-type="entity-link" >ProducersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' : 'data-target="#xs-controllers-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' :
                                            'id="xs-controllers-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' }>
                                            <li class="link">
                                                <a href="controllers/ProducersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProducersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' : 'data-target="#xs-injectables-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' :
                                        'id="xs-injectables-links-module-ProducersModule-f97ace08df01d138a436026a532cb803ef2a99ba416f025c8effdd6757f8b8fcc608deebbe7d196738c09bf5fc84c756153786e29c4196a16887ca1ffa10a0b1"' }>
                                        <li class="link">
                                            <a href="injectables/ProducersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProducersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Area.html" data-type="entity-link" >Area</a>
                                </li>
                                <li class="link">
                                    <a href="entities/AreaValue.html" data-type="entity-link" >AreaValue</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Farm.html" data-type="entity-link" >Farm</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Producer.html" data-type="entity-link" >Producer</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/areasValidator.html" data-type="entity-link" >areasValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/areasValidator-1.html" data-type="entity-link" >areasValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAreaDto.html" data-type="entity-link" >CreateAreaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDashboardDto.html" data-type="entity-link" >CreateDashboardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFarmDto.html" data-type="entity-link" >CreateFarmDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProducerDto.html" data-type="entity-link" >CreateProducerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Dashboard.html" data-type="entity-link" >Dashboard</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardTotalFarms.html" data-type="entity-link" >DashboardTotalFarms</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardTotalFarmsAreaType.html" data-type="entity-link" >DashboardTotalFarmsAreaType</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardTotalFarmsPlantingType.html" data-type="entity-link" >DashboardTotalFarmsPlantingType</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardTotalFarmsState.html" data-type="entity-link" >DashboardTotalFarmsState</a>
                            </li>
                            <li class="link">
                                <a href="classes/documentValidator.html" data-type="entity-link" >documentValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseDashboardDto.html" data-type="entity-link" >ResponseDashboardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAreaDto.html" data-type="entity-link" >UpdateAreaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDashboardDto.html" data-type="entity-link" >UpdateDashboardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFarmDto.html" data-type="entity-link" >UpdateFarmDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProducerDto.html" data-type="entity-link" >UpdateProducerDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});