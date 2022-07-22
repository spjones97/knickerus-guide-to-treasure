import React, {  useState } from 'react';
import { TextField, Button, Typography, Paper, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createItem } from '../../actions/items';
import { itemTypes } from '../../constants/itemTypes';
import { rarityTypes } from '../../constants/rarityType';

const Form = () => {
  const [itemData, setItemData] = useState({
    type: '',
    name: '',
    selectedFile: '',
    armorType: '',
    armorClass: 0,
    charges: 0,
    cost: '',
    damage: '',
    damageType: '',
    description: '',
    difficultyClass: 0,
    duration: '',
    effect: '',
    rarity: '',
    reach: '',
    requiredAlignment: '',
    requiresAttunement: false,
    stealth: '',
    weight: '',
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createItem(itemData));
    clearForm();
  };

  const clearForm = () => {
    setItemData({
      type: '',
      name: '',
      selectedFile: '',
      armorType: '',
      armorClass: 0,
      charges: 0,
      cost: '',
      damage: '',
      damageType: '',
      description: '',
      difficultyClass: 0,
      duration: '',
      effect: '',
      rarity: '',
      reach: '',
      requiredAlignment: '',
      requiresAttunement: false,
      stealth: '',
      weight: '',
    });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating an Item</Typography>
        <TextField
          name="type"
          variant="outlined"
          select
          label="Type"
          fullWidth
          value={itemData.type}
          onChange={(event) => setItemData({ ...itemData, type: event.target.value })}
        >
          {itemTypes.map(i => (
            <MenuItem key={i.value} value={i.value}>{i.label}</MenuItem>
          ))}
        </TextField>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          required
          fullWidth
          value={itemData.name}
          onChange={(event) => setItemData({ ...itemData, name: event.target.value })}
        />
        <TextField
          name="armorType"
          variant="outlined"
          label="Armor Type"
          value={itemData.armorType}
          onChange={(event) => setItemData({ ...itemData, armorType: event.target.value })}
        />
        <TextField
          name="armorClass"
          type="number"
          InputProps={{ inputProps: { max: 30, min: 0 }}}
          variant="outlined"
          label="Armor Class"
          value={itemData.armorClass}
          onChange={(event) => setItemData({ ...itemData, armorClass: event.target.value })}
        />
        <TextField
          name="charges"
          type="number"
          InputProps={{ inputProps: { max: 30, min: 0 }}}
          variant="outlined"
          label="Charges"
          value={itemData.charges}
          onChange={(event) => setItemData({ ...itemData, charges: event.target.value })}
        />
        <TextField
          name="cost"
          variant="outlined"
          label="Cost"
          value={itemData.cost}
          onChange={(event) => setItemData({ ...itemData, cost: event.target.value })}
        />
        <TextField
          name="damage"
          variant="outlined"
          label="Damage"
          value={itemData.damage}
          onChange={(event) => setItemData({ ...itemData, damage: event.target.value })}
        />
        <TextField
          name="damageType"
          variant="outlined"
          label="Damage Type"
          value={itemData.damageType}
          onChange={(event) => setItemData({ ...itemData, damageType: event.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={itemData.description}
          onChange={(event) => setItemData({ ...itemData, description: event.target.value })}
        />
        <TextField
          name="difficultyClass"
          type="number"
          InputProps={{ inputProps: { max: 30, min: 0 }}}
          variant="outlined"
          label="Difficulty Class (DC)"
          value={itemData.difficultyClass}
          onChange={(event) => setItemData({ ...itemData, difficultyClass: event.target.value })}
        />
        <TextField
          name="duration"
          variant="outlined"
          label="Duration"
          value={itemData.duration}
          onChange={(event) => setItemData({ ...itemData, duration: event.target.value })}
        />
        <TextField
          name="effect"
          variant="outlined"
          label="Effect"
          value={itemData.effect}
          onChange={(event) => setItemData({ ...itemData, effect: event.target.value })}
        />
        <TextField
          name="rarity"
          variant="outlined"
          select
          label="Rarity"
          fullWidth
          value={itemData.rarity}
          onChange={(event) => setItemData({ ...itemData, rarity: event.target.value })}
        >
          {rarityTypes.map(r => (
            <MenuItem key={r.value} value={r.value}>{r.label}</MenuItem>
          ))}
        </TextField>
        <TextField
          name="reach"
          variant="outlined"
          label="Reach"
          value={itemData.reach}
          onChange={(event) => setItemData({ ...itemData, reach: event.target.value })}
        />
        <TextField
          name="requiredAlignment"
          variant="outlined"
          label="Required Alignment"
          fullWidth
          value={itemData.requiredAlignment}
          onChange={(event) => setItemData({ ...itemData, requiredAlignment: event.target.value })}
        />
        <FormControl>
          <FormLabel id="requiresAttunement">Requires Attunement</FormLabel>
          <RadioGroup row name="row-radio-group">
            <FormControlLabel control={<Radio checked={itemData.requiresAttunement} onChange={(event) => setItemData({ ...itemData, requiresAttunement: true})}/>} label="Yes" />
            <FormControlLabel control={<Radio checked={!itemData.requiresAttunement} onChange={(event) => setItemData({ ...itemData, requiresAttunement: false})}/>} label="No" />
          </RadioGroup>
        </FormControl>
        <TextField
          name="stealth"
          variant="outlined"
          label="Stealth (Advantage/Disadvantage)"
          fullWidth
          value={itemData.stealth}
          onChange={(event) => setItemData({ ...itemData, stealth: event.target.value })}
        />
        <TextField
          name="weight"
          variant="outlined"
          label="Weight"
          value={itemData.weight}
          onChange={(event) => setItemData({ ...itemData, weight: event.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setItemData({ ...itemData, selectedFile: base64 })}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
};

export default Form;