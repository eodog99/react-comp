import ButtonGroup from "../Molecules/ButtonGroup";
import CheckBox from "../Atoms/CheckBox";
import StarButton from "../Atoms/buttons/StarBtn";
import PrimaryButton from "../Atoms/buttons/PrimaryButton";
import SecondaryButton from "../Atoms/buttons/SecondaryButton";

const BtnGroup = () => {
    return (
        <>
         <ButtonGroup> 
            <StarButton></StarButton>
            <PrimaryButton>Button</PrimaryButton>
            <PrimaryButton disabled={true}>Button</PrimaryButton>
            <SecondaryButton>Button</SecondaryButton>
            <SecondaryButton disabled={true}>Button</SecondaryButton>
            <CheckBox></CheckBox>
            </ButtonGroup>
        </>
    )
}

export default BtnGroup;