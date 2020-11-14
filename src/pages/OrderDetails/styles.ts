import styled from 'styled-components';
import { IoIosCheckmark, IoIosRedo, IoIosPerson } from 'react-icons/io';

interface ColorStyle {
    finished?: boolean;
}

export const Container = styled.div`
    flex: 1;
    background-color: #f7f9ff;
`;

export const Scroll = styled.div`
    padding: 15px;
`;

export const Header = styled.div`
    background-color: white;
    padding: 15px;
    elevation: 2;
    display: flex;
    border-radius: 3px;
    flex-direction: row;
    box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
    position: relative;
`;

export const HeaderDivision = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
`;

export const Label = styled.label`
    opacity: .5;
`;

export const Value = styled.span`
    font-weight: bold;
    font-size: 15px;
`;

export const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background-color: ${({ finished }: ColorStyle) => finished ? '#49C288' : '#354CD3'};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -15px;
`;

export const DoneIcon = styled(IoIosCheckmark)`
    color: white;
    font-size: 18px;
`;

export const InDeliveryIcon = styled(IoIosRedo)`
    color: white;
    font-size: 13px;
`;

export const PersonIcon = styled(IoIosPerson)`
    color: white;
    font-size: 13px;
`;

export const SectionTitle = styled.h1`
    font-size: 18px;
    margin: 15px 0;
`;

export const SectionCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 15px;
    border-radius: 3px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
`;

export const CityInfo = styled.span`
    opacity: .5;
    margin-bottom: 3px;
    font-size: 14px;
`;

export const Address = styled.span`
    font-size: 16px;
`;

export const DateSection = styled(SectionCard)`
    flex-direction: row;
    gap: 3px;
`;

export const DateLabel = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

export const DateValue = styled.span`
    font-size: 14px;
`;