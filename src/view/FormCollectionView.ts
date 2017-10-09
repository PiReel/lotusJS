/**
 * Created by dsmiley on 10/9/17.
 */
import {ItemViewEvent} from "../control/events/ItemViewEvent";
import {InputEvent} from "../control/events/InputEvent";
import {AbstractCollectionView} from "./AbstractCollectionView";
import {AbstractItemView} from "./AbstractItemView";
import {AbstractInputCollectionView} from "./AbstractInputCollectionView";

export class FormCollectionView extends AbstractCollectionView{
    //iterate over the ArrayList on InputModel objects
    //switch case on type and add the appropriate corresponding Lotus input control. The form item renderer will likely need to supply the label skin part
    // and all the possible components like input, radio group, file input, and list. Perhaps make a skin part for each of these as part of the item renderer.
    // The component will then have to decide which of the three to use. This allows the designer to layout the flow and style of each form input control.
    //This will probably require an override of the default behaviors for AbstractCollectionView and it's handling of item renderers.
    //assign event listeners for focus and change for each item renderer's input instance. Redispatch the focus and change events
    //crete state factory to manage form state. States include: form input (seperate div/screen), validation error (probably best done as styles that are toggled on and off),
    // submitted (seperate div/screen), error (seperate div/screen).
    // Make the state a bindable end point. Make sure there is an internal two way binding on state.
    //the skin requires a skin parts that are linked to states. For example the validation state has an error icon that would be displayed along with highlight skin parts/classes
    //the submitted states will require a confirmation message. This is perhaps better donw as a seperate div.
    //attach event listeners for submit and clear buttons
    //onSubmit bindings trigger validation by iterating model calling validate. If all feilds valid then set state=submit, else submit=validation errors.
    //only the external application can trigger state error which results from a service error

    //crab the appropriate function based on the model object type and skin part definitions
    protected createChildView(model:Object):AbstractItemView{
        let evalClass = eval(this.itemView);
        return new evalClass();
    }
}