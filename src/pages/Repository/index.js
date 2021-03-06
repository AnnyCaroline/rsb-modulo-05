import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Label } from './styles';

export default class Repository extends Component {
    // eslint-disable-next-line react/static-property-placement
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }),
        }).isRequired,
    };

    // eslint-disable-next-line react/state-in-constructor
    state = {
        repository: {},
        issues: [],
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5,
                },
            }),
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        });

        console.log(repository);
        console.log(issues);
    }

    render() {
        const { repository, issues, loading } = this.state;
        if (loading) {
            return <Loading>Carregando</Loading>;
        }
        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos repositórios</Link>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner>

                <IssueList>
                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />

                            <div>
                                <strong>
                                    <a
                                        href={issue.html_url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {issue.title}
                                    </a>
                                    {issue.labels.map(label => (
                                        <Label
                                            key={String(label.id)}
                                            color={label.color}
                                        >
                                            {' '}
                                            {label.name}{' '}
                                        </Label>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssueList>
            </Container>
        );
    }
}
