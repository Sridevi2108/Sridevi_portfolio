function SkillList({ src, skill }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src={src} alt="checkmark icon" style={{ width: '20px', height: '20px' }} />
      <span>{skill}</span>
    </li>
  );
}

export default SkillList;