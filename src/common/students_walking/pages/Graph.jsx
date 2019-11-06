// IMPORTS
// Material-ui
import Paper from '@material-ui/core/Paper'

// Externals imports (Dependencies)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Graph from "react-graph-vis"

// Internal imports
import { getStudentWalkingListData } from '../StudentsWalkingReducer'

class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, items, students } = this.props

    const graph = {
        nodes: [
            { id: 1, label: "AEDs I", title: "ALGORITMOS E ESTRUTURAS DE DADOS I" },
            { id: 2, label: "Cál. I", title: "CÁLCULO I" },
            { id: 3, label: "CS", title: "COMPUTADOR E SOCIEDADE" },
            { id: 4, label: "ICC", title: "INTRODUÇÃO Á CIÊNCIA DA COMPUTAÇÃO" },
            { id: 5, label: "LIP", title: "LABORATÓRIO DE INICIAÇÃO À PROGRAMAÇÃO" },
            { id: 6, label: "Sem. I", title: "Seminários I" },
            { id: 7, label: "AEDs II", title: "ALGORITMOS E ESTRUTURAS DE DADOS II" },
            { id: 8, label: "AC I", title: "ARQUITETURA DE COMPUTADORES I" },
            { id: 9, label: "Cál. II", title: "CÁLCULO II" },
            { id: 10, label: "Cul.: FR", title: "CULTURA RELIGIOSA: FENÔMENO RELIGIOSO" },
            { id: 11, label: "GA", title: "GEOMETRIA ANALÍTICA" },
            { id: 12, label: "Sem. II", title: "SEMINÁRIOS II" },
            { id: 13, label: "AEDs III", title: "ALGORITMOS E ESTRUTURAS DE DADOS III" },
            { id: 14, label: "AC II", title: "ARQUITETURA DE COMPUTADORES II" },
            { id: 15, label: "Cál. III", title: "CÁLCULO III" },
            { id: 16, label: "Empreend.", title: "EMPREENDEDORISMO E PLANO DE NEGÓCIOS" },
            { id: 17, label: "IPI", title: "INTRODUÇÃO À PESQUISA EM INFORMÁTICA" },
            { id: 18, label: "LAC", title: "LABORATÓRIO DE ARQUITETURA DE COMPUTADORES" },
            { id: 19, label: "MD", title: "MATEMÁTICA DISCRETA" },
            { id: 20, label: "Alg. Lin.", title: "ÁLGEBRA LINEAR" },
            { id: 21, label: "Grafos", title: "ALGORITMOS EM GRAFOS" },
            { id: 22, label: "AC III", title: "ARQUITETURA DE COMPUTADORES III" },
            { id: 23, label: "BD", title: "BANCO DE DADOS" },
            { id: 24, label: "ES I", title: "ENGENHARIA DE SOFTWARE I" },
            { id: 25, label: "Estatística", title: "ESTATÍSTICA E PROBABILIDADE" },
            { id: 26, label: "LDDM", title: "LABORATÓRIO DE DESENVOLVIMENTO PARA DISPOSITIVOS MÓVEIS" },
            { id: 27, label: "Cul.: PS", title: "CULTURA RELIGIOSA: PESSOA E SOCIEDADE" },
            { id: 28, label: "ES II", title: "ENGENHARIA DE SOFTWARE II" },
            { id: 29, label: "FTC", title: "FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO" },
            { id: 30, label: "LPA", title: "LABORATÓRIO DE PROJETO DE ALGORITMOS" },
            { id: 31, label: "LP", title: "LINGUAGEM DE PROGRAMAÇÃO" },
            { id: 32, label: "PAA", title: "PROJETO E ANÁLISE DE ALGORITMOS" },
            { id: 33, label: "SO", title: "SISTEMAS OPERACIONAIS" },
            { id: 34, label: "CG", title: "COMPUTAÇÃO GRÁFICA" },
            { id: 35, label: "CP", title: "COMPUTAÇÃO PARALELA" },
            { id: 36, label: "ES III", title: "ENGENHARIA DE SOFTWARE III" },
            { id: 37, label: "Fil.: RM", title: "FILOSOFIA: RAZÃO E MODERNIDADE" },
            { id: 38, label: "LPS", title: "LABORATÓRIO DE PROJETO DE SISTEMAS" },
            { id: 39, label: "PI", title: "PROCESSAMENTO DE IMAGENS" },
            { id: 40, label: "Redes I", title: "REDES DE COMPUTADORES I" },
            { id: 41, label: "Compila.", title: "COMPILADORES" },
            { id: 42, label: "IA", title: "INTELIGÊNCIA ARTIFICIAL" },
            { id: 43, label: "LRSO", title: "LABORATÓRIO DE PROJETO DE SISTEMAS" },
            { id: 44, label: "OS", title: "OTIMIZAÇÃO DE SISTEMAS" },
            { id: 45, label: "Redes II", title: "REDES DE COMPUTADORES II" },
            { id: 46, label: "Tópicos I", title: "TÓPICOS EM COMPUTAÇÃO I" },
            { id: 47, label: "Tópicos II", title: "TÓPICOS EM COMPUTAÇÃO II" },
            { id: 48, label: "TCC I", title: "TRABALHO DE CONCLUSÃO DE CURSO I" },
            { id: 49, label: "CD", title: "COMPUTAÇÃO DISTRIBUÍDA" },
            { id: 50, label: "Fil.: AE", title: "FILOSOFIA: ANTROPOLOGIA E ÉTICA" },
            { id: 51, label: "Modelagem", title: "MODELAGEM E AVALIAÇÃO DE DESEMPENHO" },
            { id: 52, label: "Segurança", title: "SEGURANÇA E AUDITORIA DE SISTEMAS" },
            { id: 53, label: "Tópicos II", title: "TÓPICOS EM COMPUTAÇÃO III" },
            { id: 54, label: "Tópicos IV", title: "TÓPICOS EM COMPUTAÇÃO IV" },
            { id: 55, label: "TCC II", title: "TRABALHO DE CONCLUSÃO DE CURSO II" },
        ],
        edges: [
            { from: 1, to: 7, label: '1 semestre(s)' },
            { from: 1, to: 8, label: '1 semestre(s)' },
            { from: 2, to: 9, label: '1 semestre(s)' },
            { from: 1, to: 12, label: '1 semestre(s)' },
            { from: 7, to: 13, label: '1 semestre(s)' },
            { from: 8, to: 14, label: '1 semestre(s)' },
            { from: 9, to: 15, label: '1 semestre(s)' },
            { from: 7, to: 16, label: '1 semestre(s)' },
            { from: 7, to: 17, label: '1 semestre(s)' },
            { from: 8, to: 18, label: '1 semestre(s)' },
            { from: 7, to: 19, label: '1 semestre(s)' },
            { from: 11, to: 20, label: '1 semestre(s)' },
            { from: 7, to: 21, label: '1 semestre(s)' },
            { from: 14, to: 22, label: '1 semestre(s)' },
            { from: 1, to: 23, label: '1 semestre(s)' },
            { from: 7, to: 24, label: '1 semestre(s)' },
            { from: 7, to: 26, label: '1 semestre(s)' },
            { from: 24, to: 28, label: '1 semestre(s)' },
            { from: 7, to: 29, label: '1 semestre(s)' },
            { from: 19, to: 29, label: '1 semestre(s)' },
            { from: 13, to: 30, label: '1 semestre(s)' },
            { from: 21, to: 30, label: '1 semestre(s)' },
            { from: 7, to: 31, label: '1 semestre(s)' },
            { from: 13, to: 32, label: '1 semestre(s)' },
            { from: 21, to: 32, label: '1 semestre(s)' },
            { from: 7, to: 33, label: '1 semestre(s)' },
            { from: 22, to: 33, label: '1 semestre(s)' },
            { from: 7, to: 34, label: '1 semestre(s)' },
            { from: 11, to: 34, label: '1 semestre(s)' },
            { from: 13, to: 35, label: '1 semestre(s)' },
            { from: 22, to: 35, label: '1 semestre(s)' },
            { from: 23, to: 36, label: '1 semestre(s)' },
            { from: 24, to: 36, label: '1 semestre(s)' },
            { from: 23, to: 38, label: '1 semestre(s)' },
            { from: 24, to: 38, label: '1 semestre(s)' },
            { from: 13, to: 39, label: '1 semestre(s)' },
            { from: 25, to: 39, label: '1 semestre(s)' },
            { from: 21, to: 40, label: '1 semestre(s)' },
            { from: 29, to: 41, label: '1 semestre(s)' },
            { from: 14, to: 41, label: '1 semestre(s)' },
            { from: 21, to: 42, label: '1 semestre(s)' },
            { from: 40, to: 43, label: '1 semestre(s)' },
            { from: 33, to: 43, label: '1 semestre(s)' },
            { from: 32, to: 44, label: '1 semestre(s)' },
            { from: 40, to: 45, label: '1 semestre(s)' },
            { from: 32, to: 46, label: '1 semestre(s)' },
            { from: 32, to: 47, label: '1 semestre(s)' },
            { from: 32, to: 48, label: '1 semestre(s)' },
            { from: 32, to: 49, label: '1 semestre(s)' },
            { from: 32, to: 51, label: '1 semestre(s)' },
            { from: 36, to: 52, label: '1 semestre(s)' },
            { from: 32, to: 53, label: '1 semestre(s)' },
            { from: 32, to: 54, label: '1 semestre(s)' },
            { from: 48, to: 55, label: '1 semestre(s)' },
        ]
    }
     
    const options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#000000"
        },
        height: "100%"
    }
     
    const events = {
        select: function(event) {
            var { nodes, edges } = event
            console.log(event)
            console.log(nodes)
            console.log(edges)
        }
    }
    
    return (
      <Paper className={classes.content} elevation={1}>
        <div className={classes.container}>
            <Graph
                graph={graph}
                options={options}
                events={events}
                getNetwork={network => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                }}
                />
        </div>
      </Paper>
    )
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

List.defaultProps = {
  items: [],
}

const mapStateToProps = state => ({
  ...getStudentWalkingListData(state),
})

export default connect(mapStateToProps)(List)