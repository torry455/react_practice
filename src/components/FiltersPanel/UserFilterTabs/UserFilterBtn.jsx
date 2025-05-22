export const UserFilterBtn = ({
  usersFromServer,
  selectedUserId,
  setSelectedUserId,
}) => {
  const validUsers = Array.isArray(usersFromServer) ? usersFromServer : [];

  const onSelectUser = id => {
    setSelectedUserId(id);
  };

  return (
    <div className="buttons">
      <p className="panel-tabs has-text-weight-bold">
        <a
          data-cy="FilterAllUsers"
          href="#/"
          onClick={() => onSelectUser(null)}
          className={selectedUserId === null ? 'is-active' : ''}
        >
          All
        </a>

        {validUsers.map(user => (
          <a
            key={user.id}
            data-cy="FilterUser"
            href="#/"
            onClick={() => onSelectUser(user.id)}
            className={selectedUserId === user.id ? 'is-active' : ''}
          >
            {user.name}
          </a>
        ))}
      </p>
    </div>
  );
};
