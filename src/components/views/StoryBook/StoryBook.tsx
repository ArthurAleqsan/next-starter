import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

// import '@lottiefiles/lottie-player';
import { icons } from '@/configs/icons';

import { AutoCard } from '@/components/general/AutoCard';
import { Avatar } from '@/components/general/Avatar';
import { Button } from '@/components/general/Button';
import { Card } from '@/components/general/Card';
import { Checkbox } from '@/components/general/Checkbox';
import { Container } from '@/components/general/Container';
import { DropdownMenu } from '@/components/general/DropdownMenu';
import { Input } from '@/components/general/Input';
import { InputPhone } from '@/components/general/InputPhone';
import { KeyValue } from '@/components/general/KeyValue';
import { Label } from '@/components/general/Label';
import { LottiLoader } from '@/components/general/LottieLoader';
// import { Loader } from '@/components/general/Loader';
import { NativeDatePicker } from '@/components/general/NativeDatepicker';
import { NotifyItem } from '@/components/general/NotifyItem';
import { Progress } from '@/components/general/Progress';
import { Select } from '@/components/general/Select';
import { Stepper } from '@/components/general/Stepper';
import { SvgIcon } from '@/components/general/SvgIcon';
import { Switch } from '@/components/general/Switch';
import { Tabs } from '@/components/general/Tabs';
import { Textarea } from '@/components/general/Textarea';
import { Tooltip } from '@/components/general/Tooltip';

const DROPDOWN_OPTIONS = ['New', 'Closed'];
const list = [
  {
    value: 1,
    label: 'one',
  },
  {
    value: 2,
    label: 'two',
  },
  {
    value: 3,
    label: 'three',
  },
];

const StoryBook: FC = () => {
  const { t } = useTranslation('common');
  const [checked, setChecked] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState([DROPDOWN_OPTIONS[1]]);
  const [choosedIOption, setChoosedOption] = useState(DROPDOWN_OPTIONS[0]);
  const [isDropDownMenuOpened, setIsDropDownMenuOpened] = useState(false);
  const [date, setDate] = useState('');
  const [inputValues, setInputValues] = useState({
    simple: '',
    phone: '',
    number: '',
  });
  const [selectedValue, setSelectedValue] = useState(null);
  const handleClose = useCallback(() => {
    setIsDropDownMenuOpened(false);
  }, []);
  const handleChoose = useCallback(
    (option: string) => {
      setChoosedOption(option);
      handleClose();
    },
    [handleClose]
  );
  useEffect(() => {
    const _ = DROPDOWN_OPTIONS.filter((o) => o !== choosedIOption);
    setDropdownOptions(_);
  }, [choosedIOption]);
  const handleInputChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const resetInputValue: any = (name: string): void => {
    setInputValues({ ...inputValues, [name]: '' });
  };
  // const setInputValue: any = (name: string, value: number): void => {
  //   setInputValues({ ...inputValues, [name]: value });
  // };
  const handleFillPhoneNumber: any = (phone: string) => {
    setInputValues({ ...inputValues, phone });
  };
  const handleSelect: any = (item: any) => {
    setSelectedValue(item);
  };
  const resetValue: any = () => {
    setSelectedValue(null);
  };
  return (
    <Container withBack title="Storybook">
      <div>
        <div>Button</div>
        <div>
          <Button color="primary" size="lg">
            Add maintenance
          </Button>
          <Button color="transparent" icon="edit" iconPosition="left" iconOrientation="left" minWidth={false}>
            Edit
          </Button>
          <Button color="transparent" icon="edit" iconPosition="left" iconOrientation="left" minWidth={false} disabled>
            Edit
          </Button>
          <Button color="none" size="md" icon="edit" iconPosition="left" iconOrientation="left">
            Add maintenance
          </Button>
          <Button color="primary" disabled size="lg">
            Add maintenance
          </Button>
          <Button color="secondary" size="md">
            Add maintenance
          </Button>
          <Button color="primary" size="sm" loading>
            Add maintenance
          </Button>
          <Button color="secondary" disabled size="md">
            Add maintenance
          </Button>
          <Button color="none" size="sm">
            Add maintenance
          </Button>
          <Button color="none" disabled size="sm">
            {t('buttons.save')}
          </Button>
          <Button color="none" size="xsm">
            Add maintenance
          </Button>
          <Button color="none" disabled size="xsm">
            Add maintenance
          </Button>
          <div style={{ marginBottom: 100 }}>
            <DropdownMenu
              open={isDropDownMenuOpened}
              onOutsideClick={handleClose}
              button={<div onClick={() => setIsDropDownMenuOpened(true)}>{choosedIOption}</div>}
              size="md"
              items={dropdownOptions}
              handleSelect={handleChoose}
              buttonClick={() => setIsDropDownMenuOpened(true)}
            />
          </div>

          <div style={{ marginLeft: 200 }}>
            <DropdownMenu
              open={isDropDownMenuOpened}
              onOutsideClick={handleClose}
              button={<div onClick={() => setIsDropDownMenuOpened(true)}>{choosedIOption}</div>}
              size="md"
              items={dropdownOptions}
              handleSelect={handleChoose}
              buttonClick={() => setIsDropDownMenuOpened(true)}
              dropdown_list_position="right"
            />
          </div>
        </div>
      </div>
      {/* <br />
      <div>Loaders</div>
      <Loader size="lg" color="primary" loadingText="Loading..." />
      <Loader size="md" color="primary" loadingText="Loading..." />
      <Loader size="sm" color="primary" /> */}
      <br />
      <div>LottiLoader</div>
      <LottiLoader width={100} loadingText="Loading..." />
      <LottiLoader width={200} loadingText="Loading..." />
      <LottiLoader width={300} loadingText="Loading..." />
      <br />
      <div>Inputs</div>
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
      />
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
        type="password"
      />
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
        variant="withIcon"
        icon="edit"
      />
      <Input
        name="simple"
        value={'111'}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
        disabled
      />
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
        error="error message"
      />
      <Input
        name="simple"
        value={'111'}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
        readOnly
      />
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="md"
        variant="currency"
        currency="EUR"
        resetInputValue={resetInputValue}
      />
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="lg"
      />
      <Input
        name="simple"
        value={inputValues.simple}
        onChange={handleInputChange}
        label="simple"
        placeholder="input text"
        size="auto"
      />
      <Input
        name="number"
        value={inputValues.number}
        onChange={handleInputChange}
        label="number"
        placeholder="input number"
        size="md"
        type="number"
        // setInputValue={setInputValue}
      />
      <Textarea name="simple" value={inputValues.simple} onChange={handleInputChange} id={uuid()} label="simple" />
      <InputPhone value={inputValues.phone} onChange={handleFillPhoneNumber} id={uuid()} label="Phone number" />
      <InputPhone
        value={inputValues.phone}
        onChange={handleFillPhoneNumber}
        id={uuid()}
        label="Phone number"
        error="error text"
      />
      <InputPhone
        value={inputValues.phone}
        onChange={handleFillPhoneNumber}
        id={uuid()}
        label="Phone number"
        disabled
      />
      <Select
        list={list}
        value={selectedValue}
        onChange={handleSelect}
        label="Select"
        size="lg"
        resetValue={resetValue}
      />
      <Select
        list={list}
        value={selectedValue}
        onChange={handleSelect}
        label="Select"
        size="md"
        resetValue={resetValue}
      />
      <Select
        list={list}
        value={selectedValue}
        onChange={handleSelect}
        label="Select"
        size="md"
        resetValue={resetValue}
        isMulti
      />
      <br />
      <NativeDatePicker name="datepicker" id={uuid()} onChange={(d) => setDate(d)} value={date} />
      <NativeDatePicker
        name="datepicker"
        id={uuid()}
        onChange={(d) => setDate(d)}
        value={date}
        size="md"
        placeholder="Choose date"
      />
      <br />
      <div>
        <div>Checkbox</div>
        <Checkbox id="checked1" name="checked1" onChange={() => setChecked(!checked)} value={!checked} size="40" />
        <Checkbox id="unchecked1" name="unchecked1" onChange={() => setChecked(!checked)} value={checked} size="20" />
      </div>
      <br />
      <div>
        <div>Switch</div>
        <Switch id="checked" name="checked" onChange={() => setChecked(!checked)} value={!checked} />
        <Switch id="unchecked" name="unchecked" onChange={() => setChecked(!checked)} value={checked} />
      </div>
      <br />
      <div>
        <div>Label</div>
        <Label name="New" />
        <Label name="In progress" />
        <Label name="Done" />
        <Label name="Closed" />
        <Label name="Open" />
        <Label name="Need mileage" />
        <Label name="Used" />
        <Label name="Mileage reached" />
        <Label name="To repair" />
        <Label name="To scrap" />
      </div>
      <br />
      <div>
        <div>Progress</div>
        <Progress percent={15} />
      </div>
      <br />
      <div>
        <div>Avatar</div>
        <Avatar name="John Dou (xs)" size="xs" />
        <Avatar name="John Dou (sm)" size="sm" />
        <Avatar name="John Dou (lg)" isComment size="lg" />
      </div>
      <br />
      <div>
        <div>AutoCard</div>
        <AutoCard />
      </div>
      <br />
      <div>
        <div>Notification Item</div>
        <NotifyItem selected name="Chane oil" from="Florencio Dorrance" date="04/29/2019, 13:50" />
        <NotifyItem name="Chane oil" from="Florencio Dorrance" date="04/29/2019, 13:50" />
      </div>
      <br />
      <div>
        <div>Tooltip</div>
        <Tooltip simpleTitle="Deal term is from cashflowto last payment" customOptions={{ position: 'bottom' }}>
          <span>Bottom</span>
        </Tooltip>
        <Tooltip simpleTitle="Deal term is from cashflowto last payment" customOptions={{ position: 'top' }}>
          <span>Top</span>
        </Tooltip>
      </div>
      <br />
      <div>
        <div>Card</div>
        <Card title="pages.profile.details" titleWithBorder>
          <div>Card Content</div>
        </Card>
        <br />
        <Card title="pages.profile.details" onEdit={() => console.debug('edit :::')} needCollapse>
          <KeyValue title="key" value="value" />
          <br />
          <KeyValue title="key" value="value" />
          <br />
          <KeyValue title="key" value="value" />
          <br />
          <KeyValue title="key" value="value" />
        </Card>
      </div>
      <br />
      <div>
        <div>KeyValue</div>
        <KeyValue title="key" value="value" />
      </div>
      <br />
      <div>
        <div>Tabs</div>
        <Tabs options={[{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }]} type="primary" value={2} />
        <br />
        <Tabs
          value={1}
          type="secondary"
          options={[
            { title: 'Tasks', icon: 'tasks', activeIcon: 'tasksTabActive' },
            { title: 'Parts', icon: 'carParts', activeIcon: 'carPartsTabActive' },
            { title: 'Parts', icon: 'carParts', activeIcon: 'carPartsTabActive' },
          ]}
        />
      </div>
      <br />
      <div>
        <div>Stepper</div>
        <Card title="Steps">
          <Stepper stepsCount={4} value={2} />
        </Card>
      </div>
      <br />
      <div>Icons</div>
      <div className="flexible jAroud wrap">
        {Object.keys(icons).map((item) => (
          <div className="flexible vertical jBetween aCenter" key={item} style={{ margin: 10 }}>
            <SvgIcon pointer src={icons[item]} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export { StoryBook };
