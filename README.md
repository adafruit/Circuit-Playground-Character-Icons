----
name: Adafruit Circuit Playground Character Icons for MakeCode Arcade
----

# Circuit-Playground-Character-Icons

Images from Adafruit Circuit Playground Characters

## To regenerate images

* clone this repo in local install of https://github.com/Microsoft/pxt-arcade under ``/projects``
* you'll need to prep the project by running
```
pxt install
```
* add ``"device": "file:../../libs/device"`` to ``pxt.json`` to run the cli


* after adding PNG files in ``circuitplayground/``, run
```
pxt buildsprites circuitplayground
```
* commit your changes
* bump

```
pxt bump
```

## License

MIT

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)

