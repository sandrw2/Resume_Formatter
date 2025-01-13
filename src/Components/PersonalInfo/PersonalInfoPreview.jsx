function PersonalInfoPreview({first, last, phone, email}){
    return (
        <div>
            <h2 className = "general">
                {first || last
                ? `${first} ${last}`
                : 'Name'}
            </h2>
            <h5>
                {email ? email: 'Email'} | {phone ? phone: 'Phone'}
            </h5>
        </div>
    )
}
export default PersonalInfoPreview