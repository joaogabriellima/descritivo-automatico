import React, { useState } from 'react';
import { Typography, Container, Grid, FormControlLabel, Button, TextField, Checkbox } from '@material-ui/core';
import moment from 'moment';

// Styles
import styles from './styles';

export default function HomePage() {
    const [names, setNames] = useState('');
    const [isDefault, setIsDefault] = useState(true);
    const [startDate, setStartDate] = useState('2021-03-01');
    const [endDate, setEndDate] = useState('2021-03-31');
    const [allDescriptives, setAllDescriptives] = useState([{
        title: '',
        message: ''
    }]);

    function OnSubmit() {
        const startDateFormatted = moment(startDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
        const endDateFormatted = moment(endDate, 'YYYY-MM-DD').format('DD/MM/YYYY');

        if (isDefault) {
            let allNames = names.split(';');
            let pushToDescriptives = [{ title: '', message: '' }];
            allNames.forEach((e) => {
                const title = `Descritivo ${e} - Ref. ao período de ${startDateFormatted} a ${endDateFormatted}`;
                const message = `Boa tarde, ${e}!
                 Segue anexo o descritivo referente ao período de ${startDateFormatted} a ${endDateFormatted}. 
                 
                 Estando de acordo, por gentileza, enviar a nota fiscal para pagamento no e-mail: financeiro@kuadro.com.br. 
                 
                 Att., 
                 
                 Marina Ribeiro`;
                pushToDescriptives.push({ title, message });
            });

            setAllDescriptives(pushToDescriptives);
            return;
        }
    }

    function isFormValid() {
        if (names === '' || startDate === '' || endDate === '') {
            return false;
        }

        return true;
    }

    const handleChangeYes = () => {
        setIsDefault(true);
    };

    const handleChangeNo = () => {
        setIsDefault(false);
    };

    const handleChangeNames = (event) => {
        setNames(event.target.value);
    }

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const handleChangeEndDate = (event) => {
        setEndDate(event.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <div style={styles.box as React.CSSProperties}>
                <Typography component="h1" variant="h5" style={styles.boxTitle}>
                    Geração automática de Descritivos
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5" style={styles.checkboxTitle}>
                            Insira os nomes separados por ponto e vírgula (;)
                        </Typography>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="Nomes"
                            autoFocus
                            placeholder="exemplo; exemplo2; exemplo3"
                            style={styles.namesInput}
                            onChange={handleChangeNames}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5" style={styles.checkboxTitle}>
                            Selecione o período do descritivo
                        </Typography>
                        <TextField
                            id="startDate"
                            label="Início"
                            type="date"
                            defaultValue={startDate}
                            style={styles.dateInput}
                            onChange={handleChangeStartDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="endDate"
                            label="Fim"
                            type="date"
                            defaultValue={endDate}
                            style={styles.dateInput}
                            onChange={handleChangeEndDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5" style={styles.checkboxTitle}>
                            Descritivo padrão?
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox checked={isDefault} onChange={handleChangeYes} name="Sim" />}
                            label="Sim"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={!isDefault} onChange={handleChangeNo} name="Não" />}
                            label="Não"
                        />
                    </Grid>

                    {!isDefault ? (
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={8}
                                id="firstName"
                                label="Texto do descritivo"
                                autoFocus
                            />
                        </Grid>
                    ) : null}

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={OnSubmit}
                        style={styles.submit}
                        disabled={!isFormValid()}
                    >
                        Gerar Descritivos
                    </Button>

                    {allDescriptives.map((item, index) => {
                        if (item.title !== '') {
                            return (
                                <Grid item xs={12}>
                                    <Typography style={styles.listItem}>
                                        {item.title}
                                    </Typography>
                                    <Typography style={styles.listItem}>
                                        {item.message}
                                    </Typography>
                                </Grid>)
                        }

                        return null;
                    })}

                </Grid>
            </div>
        </Container>
    );
}