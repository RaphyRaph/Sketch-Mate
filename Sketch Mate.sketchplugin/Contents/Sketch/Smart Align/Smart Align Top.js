// Aligns layers to their parent group’s top edge (control cmd ↑)

@import '../inventory.js'


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // action

    if (selection.count() == 1) {

        // remember layer
        var layer = selection[0];

        // get the layers height
        var height = layer.frame().height();

        // get layers top
        var top = layer.absoluteRect().y();

        // get parent absolute y
        var parentY = layer.parentGroup().absoluteRect().y();

        // align layer with parent
        if (top != parentY) {
            layer.absoluteRect().setY(parentY);
        } else {
            com.getflourish.utils.sendAlignTop();
        }

        // display relative position info
        com.getflourish.common.showMarginsOf(layer);
    } else {
        com.getflourish.utils.sendAlignTop();
    }

}