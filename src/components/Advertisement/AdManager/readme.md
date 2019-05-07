Ad manager module.
basic version. improvements to be tracked into EWL-578

## API:

exposes this endpoint:

```
{
  enums : {
    adTypes :   <Object>
    pageTypes:  <Object>
    events:     <Object>
  }
  registerEvents : {
    injectAd :       <Function>
    refreshAd:       <Function>
  }
  manageAds: {
    injectAdSlot:   <Function>
    refreshAdSlot:  <Function>
  }
  googlePublisherTag : {
    getInstance:        <Function>
  }
  defaultSlotsConfig:   <Object>
}
```

##### adTypes

> types of ads

##### pageTypes

> types of pages supported by ad configs

##### events

> types of events you may subscribe to using `manageAds` .

#### registerEvents

A single place which keeps interactions for advertisements.

##### injectAd() / refreshAd()

> you can register your cb which happens when ad slot needs to be injected by `manageAds.injectAdSlot / refreshAdSlot`

#### manageAds

##### injectAdSlot(adSlotType, placementId, isNoMobile, isNoTablet, isNoDesktop)

> `adSlotType` : `AdManager.events.adTypes`

> `placementId` : domID to inject advertisement to ( meets the Ad lot ids configuration by the `AdInit` component )

##### refreshAdSlot(slotId)

> refreshes a given `slotId: DOM ID of ad slot` ( in case it's renderred into the DOM )

##### getInstance()

> returns instance of the existing window.googletagmanager ( or creates a new one if not exists )

#### defaultSlotsConfig

this is a default slots config for advertisement slots;
