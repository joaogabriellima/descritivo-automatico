import React, { useState } from 'react';
import { Typography, Container, Grid, FormControlLabel, Button, TextField, Checkbox, Divider } from '@material-ui/core';
import moment from 'moment';

// Styles
import styles from './styles';
import GenerateDescriptives from './types';

export default function HomePage() {
    const [names, setNames] = useState('');
    const [isDefault, setIsDefault] = useState(true);
    const [value, setValue] = useState(0);
    const [startDate, setStartDate] = useState('2021-03-01');
    const [endDate, setEndDate] = useState('2021-03-31');
    const [allDescriptives, setAllDescriptives] = useState([{
        title: '',
        message: ''
    }]);
    const [customTitle, setCustomTitle] = useState('');
    const [customText, setCustomText] = useState('');

    function onSubmit() {
        const startDateFormatted = moment(startDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
        const endDateFormatted = moment(endDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
        const allNames = names.split(';');

        const params: GenerateDescriptives = {
            startDateFormatted: startDateFormatted,
            endDateFormatted: endDateFormatted,
            allNamesArray: allNames,
            value: value ?? 0
        }

        if (isDefault) {
            defaultDescriptiveGeneration(params);
            return;
        }

        customDescriptiveGeneration(params);
    }

    function defaultDescriptiveGeneration(params: GenerateDescriptives) {
        const { allNamesArray, startDateFormatted, endDateFormatted, value } = params;
        let pushToDescriptives = [{ title: '', message: '' }];
        allNamesArray.forEach((e) => {
            const title = `Descritivo ${e} - Ref. ao período de ${startDateFormatted} a ${endDateFormatted}`;
            const message = `Boa tarde, ${e}!
                 Segue em anexo o descritivo referente ao período de ${startDateFormatted} a ${endDateFormatted}. 
                 Valor: R$ ${value}
                 
                 Estando de acordo, por gentileza, enviar a nota fiscal para pagamento no e-mail: financeiro@kuadro.com.br. 
                 
                 Att,`;
            pushToDescriptives.push({ title, message });
        });

        setAllDescriptives(pushToDescriptives);
    }

    function customDescriptiveGeneration(params: GenerateDescriptives) {
        const { allNamesArray, startDateFormatted, endDateFormatted, value } = params;
        let title = customTitle;
        let message = customText;
        let pushToDescriptives = [{ title: '', message: '' }];

        allNamesArray.forEach((nome) => {
            let title = customTitle;
            let message = customText;

            title = title.replace('${nome}', ` ${nome} `);
            title = title.replace('${dataInicial}', ` ${startDateFormatted} `);
            title = title.replace('${dataFinal}', ` ${endDateFormatted} `);
            title = title.replace('${valor}', ` ${value} `);

            message = message.replace('${nome}', ` ${nome} `);
            message = message.replace('${dataInicial}', ` ${startDateFormatted} `);
            message = message.replace('${dataFinal}', ` ${endDateFormatted} `);
            message = message.replace('${valor}', ` ${value} `);

            pushToDescriptives.push({ title, message });
        });

        setAllDescriptives(pushToDescriptives);
    }

    function isFormValid() {
        if (names === '' || startDate === '' || endDate === '') {
            return false;
        }

        if (!isDefault && (customTitle === '' || customText === '')) {
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

    const handleChangeValue = (event) => {
        setValue(event.target.value);
    }

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const handleChangeEndDate = (event) => {
        setEndDate(event.target.value);
    }

    const handleChangeCustomTitle = (event) => {
        setCustomTitle(event.target.value);
    }

    const handleChangeCustomText = (event) => {
        setCustomText(event.target.value);
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
                        <TextField
                            autoComplete="valor"
                            type="number"
                            name="valor"
                            variant="outlined"
                            required
                            fullWidth
                            id="Valor"
                            label="Valor"
                            placeholder="R$ 99,90"
                            style={styles.namesInput}
                            onChange={handleChangeValue}
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
                                id="firstName"
                                label="Título"
                                autoFocus
                                placeholder="Use ${nome} para posicionar o nome, ${valor} para o valor, ${dataInicial} e ${dataFinal} para posicionar as datas"
                                style={styles.customTitleInput}
                                onChange={handleChangeCustomTitle}
                            />
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
                                placeholder={'Use ${nome} para posicionar os nomes, ${valor} para o valor, ${dataInicial} e ${dataFinal} para posicionar as datas.'}
                                autoFocus
                                onChange={handleChangeCustomText}
                            />
                        </Grid>
                    ) : null}

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
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
                                    <Divider />
                                </Grid>)
                        }

                        return null;
                    })}

                </Grid>
            </div>
        </Container>
    );
}